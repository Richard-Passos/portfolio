import { SkillsResponse } from '@/app/api/skills/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import request from '../request';

type Params = {
  locale: Locale['value'];
};

const skillsApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SkillsResponse>(`/api/skills?locale=${params.locale}`, {
    ...config,
    next: {
      tags: [cacheTags.skills],
      ...config?.next
    }
  });

export default skillsApiGet;
