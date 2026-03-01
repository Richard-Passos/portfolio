import { headers } from 'next/headers';

import { DEFAULT_LOCALE } from '@/constants';
import { templateRegistry } from '@/data/template';
import { TemplateRegistry } from '@/types';
import { getParams, isTemplate, normKey } from '@/utils';
import { API, APIResponse, Responses, response } from '@/utils/actions';

type Params = Promise<{
  slug: string;
}>;

type PageResponse = APIResponse<
  | Responses['not-found']
  | (Responses['success'] & { data: TemplateRegistry<any> })
>;

const GET = API<PageResponse, Params>(
  async ({ nextUrl: { searchParams } }, _, requestParams) => {
    const params = await resolveParams(searchParams, requestParams),
      data = resolveResults(params);

    if (data === null) {
      return response('not-found');
    }

    return response('success', {
      data
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
    slug: normKey(paramsRes.slug)
  };
};

const resolveResults = (params: Awaited<ReturnType<typeof resolveParams>>) => {
  return isTemplate(params.slug) ? templateRegistry[params.slug] : null;
};

export { GET };
export type { PageResponse };
