import { headers } from 'next/headers';

import { DEFAULT_LOCALE } from '@/constants';
import { Project } from '@/types';
import { getParams, getTranslations, keys, normId } from '@/utils';
import { API, APIResponse, Responses, response } from '@/utils/actions';

type Params = Promise<{
  slug: string;
}>;

type SingleProjectResponse = APIResponse<
  | Responses['not-found']
  | (Responses['success'] & {
      data: Project;
      meta: {
        adjacentIds: {
          prev?: string;
          next?: string;
        };
      };
    })
>;

const GET = API<SingleProjectResponse, Params>(
  async ({ nextUrl: { searchParams } }, _, requestParams) => {
    const params = await resolveParams(searchParams, requestParams),
      { data, adjacentIds } = resolveResults(params);

    if (data === undefined) {
      return response('not-found');
    }

    return response('success', {
      data,
      meta: {
        adjacentIds
      }
    });
  },
  headers
);

const resolveParams = async (
  searchParams: URLSearchParams,
  requestParams: Params
) => {
  const paramsRes = await requestParams;

  return {
    ...getParams(
      searchParams,
      { locale: 'locale' },
      { locale: DEFAULT_LOCALE.value }
    ),
    slug: normId(paramsRes.slug)
  };
};

const resolveResults = (params: Awaited<ReturnType<typeof resolveParams>>) => {
  const t = getTranslations(params.locale),
    data = (t.projects as Record<string, Project>)[params.slug + 'Page'];

  if (data === undefined) {
    return {};
  }

  const resultsAux = keys(t.projects),
    index = resultsAux.indexOf(params.slug);

  return {
    data,
    adjacentIds: {
      prev: resultsAux.at(index > 0 ? index - 1 : -1),
      next: resultsAux.at(index < resultsAux.length - 1 ? index + 1 : 0)
    }
  };
};

export { GET };
export type { Params, SingleProjectResponse };
