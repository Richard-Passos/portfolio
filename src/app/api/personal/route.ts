import { headers } from 'next/headers';

import { defaultLocale } from '@/constants/locales';
import { Locale, Personal } from '@/types';
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

type PersonalSuccessResponse = Responses['success'] & {
  data: Personal;
};
type PersonalResponse = APIResponse<PersonalSuccessResponse>;

const GET = API<PersonalSuccessResponse>(({ nextUrl: { searchParams } }) => {
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

  return t.personal;
};

export { GET };
export type { PersonalResponse };
