import { PersonalResponse } from '@/app/api/personal/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import request from '../request';

type Params = {
  locale: Locale['value'];
};

const personalApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<PersonalResponse>(`/api/personal?locale=${params.locale}`, {
    ...config,
    next: {
      tags: [cacheTags.personal],
      ...config?.next
    }
  });

export default personalApiGet;
