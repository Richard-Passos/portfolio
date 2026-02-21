import { ValuesResponse } from '@/app/api/values/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import request from '../request';

type Params = {
  locale: Locale['value'];
};

const valuesApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<ValuesResponse>(`/api/values?locale=${params.locale}`, {
    ...config,
    next: {
      tags: [cacheTags.values],
      ...config?.next
    }
  });

export default valuesApiGet;
