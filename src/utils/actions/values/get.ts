'use server';

import { ValuesResponse } from '@/app/api/values/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
};

const valuesApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<ValuesResponse>(`/api/values?locale=${params.locale}`, config);

export default valuesApiGet;
