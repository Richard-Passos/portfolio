import { ProjectPageResponse } from '@/app/api/pages/projects/[slug]/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import { request } from '../';

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
    {
      ...config,
      next: {
        tags: [cacheTags.pages],
        ...config?.next
      }
    }
  );

export default pagesApiGetProject;
