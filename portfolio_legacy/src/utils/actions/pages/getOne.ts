import { PageResponse } from '@/app/api/pages/[slug]/route';
import { Locale, TemplateSlug } from '@/types';

import { RequestConfig, request } from '../request';

type Params = {
  slug: TemplateSlug;
  locale: Locale;
};

const pagesApiGetOne = async (params: Params, config?: RequestConfig) => {
  const res = await request<PageResponse>(
    `/api/pages/${params.slug}?locale=${params.locale}`,
    {
      ...config,
      tags: ['pages']
    }
  );

  return res.ok ? res.data : undefined;
};

export { pagesApiGetOne };
