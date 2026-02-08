'use server';

import { SingleCareerResponse } from '@/app/api/career/[slug]/route';
import { Locale } from '@/types';
import { request } from '@/utils';

type Params = {
  slug: string;
  locale: Locale['value'];
};

const careerApiGetOne = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<SingleCareerResponse>(
    `/api/career/${params.slug}?locale=${params.locale}`,
    config
  );

export default careerApiGetOne;
