import { HeaderResponse } from '@/app/api/header/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import { request } from '../';

type Params = {
  locale: Locale['value'];
};

const headerApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<HeaderResponse>(`/api/header?locale=${params.locale}`, {
    ...config,
    next: {
      tags: [cacheTags.header],
      ...config?.next
    }
  });

export default headerApiGet;
