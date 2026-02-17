'use server';

import { SinglePageResponse } from '@/app/api/pages/[slug]/route';
import { Locale } from '@/types';
import { request } from '@/utils';

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
    config
  );

export default pagesApiGetOne;
