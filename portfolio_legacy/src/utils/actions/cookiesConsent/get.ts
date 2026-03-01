import { CookiesConsentResponse } from '@/app/api/cookies-consent/route';
import { Locale } from '@/types';

import { RequestConfig, request } from '../request';

type Params = {
  locale: Locale;
};

const cookiesConsentApiGet = async (params: Params, config?: RequestConfig) =>
  await request<CookiesConsentResponse>(
    `/api/cookies-consent?locale=${params.locale}`,
    {
      ...config,
      tags: ['cookies-consent']
    }
  );

export { cookiesConsentApiGet };
