import { PagesResponse } from '@/app/api/pages/route';
import { Locale, Page } from '@/types';

import { RequestConfig, request } from '../request';

type Params<T extends Page['type'] | undefined> = {
  locale: Locale;
  type: T;
  isSelected?: boolean;
};

const pagesApiGet = async <T extends Page['type'] | undefined>(
  params: Params<T>,
  config?: RequestConfig
) => {
  const searchParams = new URLSearchParams();
  if (params.locale) {
    searchParams.append('locale', params.locale);
  }
  if (params.type) {
    searchParams.append('type', params.type);
  }
  if (params.isSelected) {
    searchParams.append('is-selected', String(params.isSelected));
  }

  const query = searchParams.toString(),
    target_url = `/api/pages${query ? `?${query}` : ''}`;

  const res = await request<PagesResponse>(target_url, {
    ...config,
    tags: ['pages']
  });

  return res.ok
    ? {
        data: res.data as Record<
          string,
          T extends undefined ? Page : Extract<Page, { type: T }>
        >,
        meta: res.meta
      }
    : {};
};

export { pagesApiGet };
