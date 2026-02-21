import { FooterResponse } from '@/app/api/footer/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import { request } from '../';

type Params = {
  locale: Locale['value'];
};

const footerApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<FooterResponse>(`/api/footer?locale=${params.locale}`, {
    ...config,
    next: {
      tags: [cacheTags.footer],
      ...config?.next
    }
  });

export default footerApiGet;
