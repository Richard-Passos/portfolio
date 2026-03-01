import { ProjectPageResponse } from '@/app/api/pages/projects/[slug]/route';
import { Locale } from '@/types';

import { RequestConfig, request } from '../request';

type Params = {
  slug: string;
  locale: Locale;
};

const pagesApiGetProject = async (params: Params, config?: RequestConfig) =>
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

export { pagesApiGetProject };
