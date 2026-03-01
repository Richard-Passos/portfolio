import { ProjectsResponse } from '@/app/api/projects/route';
import { Locale } from '@/types';

import request from '../request';

type Params = {
  locale: Locale;
  isSelected?: boolean;
};

const projectsApiGet = async (params: Params, config?: RequestConfig) =>
  await request<ProjectsResponse>(
    `/api/projects?locale=${params.locale}&is-selected=${!!params.isSelected}`,
    {
      ...config,
      next: {
        tags: [cacheTags.projects],
        ...config?.next
      }
    }
  );

export { projectsApiGet };
