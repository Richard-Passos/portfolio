'use server';

import { CareerResponse } from '@/app/api/career/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  locale: Locale['value'];
  isSelected?: boolean;
};

const careerApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<CareerResponse>(`/api/career?locale=${params.locale}`, config);

export default careerApiGet;
