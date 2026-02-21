import { headers } from 'next/headers';

import { defaultLocale } from '@/constants/locales';
import { Header, Locale } from '@/types';
import { getTranslations, isType } from '@/utils';
import { API } from '@/utils/actions';
import { APIResponse } from '@/utils/actions/API';
import response, { Responses } from '@/utils/actions/response';

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type HeaderSuccessResponse = Responses['success'] & {
  data: Header;
};
type HeaderResponse = APIResponse<HeaderSuccessResponse>;

const GET = API<HeaderSuccessResponse>(({ nextUrl: { searchParams } }) => {
  const params = resolveParams(searchParams),
    data = resolveResults(params);

  return response('success', { data });
}, headers);

const resolveParams = (searchParams: URLSearchParams) => {
  const params: Record<keyof SearchParams, string | null> = {
    locale: searchParams.get('locale')
  };

  return {
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale
  };
};

const resolveResults = (params: ReturnType<typeof resolveParams>) => {
  const t = getTranslations(params.locale);

  return t.header;
};

export { GET };
export type { HeaderResponse };
