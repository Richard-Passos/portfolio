import { SinglePageResponse } from '@/app/api/pages/[slug]/route';
import { cacheTags } from '@/constants';
import { Locale } from '@/types';

import { request } from '../';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const pagesApiGetOne = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SinglePageResponse>(
    `/api/pages/${params.slug}?locale=${params.locale}`,
    {
      ...config,
      next: {
        tags: [cacheTags.pages],
        ...config?.next
      }
    }
  );

export default pagesApiGetOne;
