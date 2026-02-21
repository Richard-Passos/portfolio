import { CareerResponse } from '@/app/api/career/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import { request } from '../';

type Params = {
  locale: Locale['value'];
  isSelected?: boolean;
};

const careerApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<CareerResponse>(`/api/career?locale=${params.locale}`, {
    ...config,
    next: {
      tags: [cacheTags.career],
      ...config?.next
    }
  });

export default careerApiGet;
