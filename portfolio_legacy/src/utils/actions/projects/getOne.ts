import { SingleProjectResponse } from '@/app/api/projects/[slug]/route';
import { Locale } from '@/types';

import request from '../request';

type Params = {
  slug: string;
  locale: Locale;
};

const projectsApiGetOne = async (params: Params, config?: RequestConfig) =>
  await request<SingleProjectResponse>(
    `/api/projects/${params.slug}?locale=${params.locale}`,
    {
      ...config,
      next: {
        tags: [cacheTags.projects],
        ...config?.next
      }
    }
  );

export { projectsApiGetOne };
