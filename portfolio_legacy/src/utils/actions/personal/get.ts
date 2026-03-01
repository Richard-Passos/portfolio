import { PersonalResponse } from '@/app/api/personal/route';
import { Locale } from '@/types';

import request from '../request';

type Params = {
  locale: Locale;
};

const personalApiGet = async (params: Params, config?: RequestConfig) =>
  await request<PersonalResponse>(`/api/personal?locale=${params.locale}`, {
    ...config,
    tags: ['personal']
  });

export { personalApiGet };
