import { PagesResponse } from '@/app/api/pages/route';
import { cacheTags } from '@/constants';
import { Locale, Page } from '@/types';

import { request } from '../';

type Params = {
  locale: Locale['value'];
  type?: Page['type'];
  isSelected?: boolean;
};

const pagesApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) => {
  const searchParams = new URLSearchParams();
  if (params.locale) searchParams.append('locale', params.locale);
  if (params.type) searchParams.append('type', params.type);
  if (params.isSelected)
    searchParams.append('is-selected', String(params.isSelected));

  const query = searchParams.toString(),
    target_url = `/api/pages${query ? `?${query}` : ''}`;

  return await request<PagesResponse>(target_url, {
    ...config,
    next: {
      tags: [cacheTags.pages],
      ...config?.next
    }
  });
};

export default pagesApiGet;
