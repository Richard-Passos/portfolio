import { FooterResponse } from '@/app/api/footer/route';
import { Locale } from '@/types';

import { RequestConfig, request } from '../request';

type Params = {
  locale: Locale;
};

const footerApiGet = async (params: Params, config?: RequestConfig) =>
  await request<FooterResponse>(`/api/footer?locale=${params.locale}`, {
    ...config,
    tags: ['footer']
  });

export { footerApiGet };
