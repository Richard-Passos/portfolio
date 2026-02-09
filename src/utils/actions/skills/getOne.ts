'use server';

import { SkillsResponse } from '@/app/api/skills/[slug]/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const skillsApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SkillsResponse>(
    `/api/skills/${params.slug}?locale=${params.locale}`,
    config
  );

export default skillsApiGet;
