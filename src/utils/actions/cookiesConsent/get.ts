import { CookiesConsentResponse } from '@/app/api/cookies-consent/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import { request } from '../';

type Params = {
  locale: Locale['value'];
};

const cookiesConsentApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<CookiesConsentResponse>(
    `/api/cookies-consent?locale=${params.locale}`,
    {
      ...config,
      next: {
        tags: [cacheTags.cookiesConsent],
        ...config?.next
      }
    }
  );

export default cookiesConsentApiGet;
