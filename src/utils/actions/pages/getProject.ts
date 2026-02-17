'use server';

import { ProjectPageResponse } from '@/app/api/pages/projects/[slug]/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const pagesApiGetProject = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<ProjectPageResponse>(
    `/api/pages/projects/${params.slug}?locale=${params.locale}`,
    config
  );

export default pagesApiGetProject;
