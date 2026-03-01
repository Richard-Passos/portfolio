import { HeaderResponse } from '@/app/api/header/route';
import { Locale } from '@/types';

import { RequestConfig, request } from '../request';

type Params = {
  locale: Locale;
};

const headerApiGet = async (params: Params, config?: RequestConfig) =>
  await request<HeaderResponse>(`/api/header?locale=${params.locale}`, {
    ...config,
    tags: ['header']
  });

export { headerApiGet };
