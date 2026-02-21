import { headers } from 'next/headers';

import { defaultLocale } from '@/constants/locales';
import { Locale, Page } from '@/types';
import { getTranslations, isType, normKey } from '@/utils';
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

type SinglePageSuccessResponse =
  | Responses['not-found']
  | (Responses['success'] & {
      data: Page;
    });
type SinglePageResponse = APIResponse<SinglePageSuccessResponse>;

const GET = API<SinglePageSuccessResponse, Params>(
  async ({ nextUrl: { searchParams } }, _, requestParams) => {
    const params = await resolveParams(searchParams, requestParams),
      data = resolveResults(params);

    console.log('Params: ', params);

    if (data === undefined) return response('not-found');

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
  const requestParamsRes = await requestParams;

  const params: Record<keyof SearchParams, string | null> = {
    locale: searchParams.get('locale')
  };

  return {
    slug: normKey(requestParamsRes.slug),
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale
  };
};

const resolveResults = (params: Awaited<ReturnType<typeof resolveParams>>) => {
  const t = getTranslations(params.locale);

  return (t.pages as unknown as Record<string, Page>)[params.slug] ?? undefined;
};

export { GET };
export type { SinglePageResponse };
