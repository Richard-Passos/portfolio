import { headers } from 'next/headers';

import { defaultLocale } from '@/constants/locales';
import { Locale, Project } from '@/types';
import { getTranslations, isType, keys, normId } from '@/utils';
import { API } from '@/utils/actions';
import { APIResponse } from '@/utils/actions/API';
import response, { Responses } from '@/utils/actions/response';

type Params = Promise<{
  slug: string;
}>;

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type SingleProjectSuccessResponse =
  | Responses['not-found']
  | (Responses['success'] & {
      data: Project;
      meta: {
        adjacentIds: {
          prev?: string;
          next?: string;
        };
      };
    });
type SingleProjectResponse = APIResponse<SingleProjectSuccessResponse>;

const GET = API<SingleProjectSuccessResponse, Params>(
  async ({ nextUrl: { searchParams } }, _, requestParams) => {
    const params = await resolveParams(searchParams, requestParams),
      { data, adjacentIds } = resolveResults(params);

    if (data === undefined) return response('not-found');

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
  const requestParamsRes = await requestParams;

  const params: Record<keyof SearchParams, string | null> = {
    locale: searchParams.get('locale')
  };

  return {
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale,
    slug: normId(requestParamsRes.slug)
  };
};

const resolveResults = (params: Awaited<ReturnType<typeof resolveParams>>) => {
  const t = getTranslations(params.locale),
    data = (t.projects as Record<string, Project>)[params.slug] ?? undefined;

  if (data === undefined) return {};

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
