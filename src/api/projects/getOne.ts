import { Locale } from '@/types';
import { request } from '@/utils';

import { SingleProjectResponse } from '../../app/api/projects/[slug]/route';

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
    config
  );

export default projectsApiGetOne;
