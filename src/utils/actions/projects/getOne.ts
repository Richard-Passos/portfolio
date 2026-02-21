import { SingleProjectResponse } from '@/app/api/projects/[slug]/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import request from '../request';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const projectsApiGetOne = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
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

export default projectsApiGetOne;
