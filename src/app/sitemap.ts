import { MetadataRoute } from 'next';

import { baseUrl, defaultPages } from '@/common';
import { defaultLocale } from '@/constants/locales';
import { pagesApi } from '@/utils/actions';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const res = await pagesApi.get({ locale: defaultLocale.value });

  if (!res.ok) return [];

  const paths = res.data.keys().map((key) => ({
    url: `${baseUrl}/${key === defaultPages.home ? '' : key}`,
    lastModified: new Date()
  }));

  return [...paths];
};

export default sitemap;
