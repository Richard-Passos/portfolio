import { ProjectsResponse } from '@/app/api/projects/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import request from '../request';

type Params = {
  locale: Locale['value'];
  isSelected?: boolean;
};

const projectsApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
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

export default projectsApiGet;
