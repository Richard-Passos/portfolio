import { headers } from 'next/headers';

import { DEFAULT_LOCALE } from '@/constants';
import { Personal } from '@/types';
import { getParams, getTranslations } from '@/utils';
import { API, APIResponse, Responses, response } from '@/utils/actions';

type PersonalResponse = APIResponse<
  Responses['success'] & {
    data: Personal;
  }
>;

const GET = API<PersonalResponse>(({ nextUrl: { searchParams } }) => {
  const params = resolveParams(searchParams),
    data = resolveResults(params);

  return response('success', { data });
}, headers);

const resolveParams = (searchParams: URLSearchParams) =>
  getParams(
    searchParams,
    { locale: 'locale' },
    { locale: DEFAULT_LOCALE.value }
  );

const resolveResults = (params: ReturnType<typeof resolveParams>) => {
  const t = getTranslations(params.locale);

  return t.personal;
};

export { GET };
export type { PersonalResponse };
