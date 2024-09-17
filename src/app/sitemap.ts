import { MetadataRoute } from 'next';
import { getMessages } from 'next-intl/server';

import { baseUrl } from '@/constants';
import { defaultLocale } from '@/constants/locales';
import { values } from '@/utils';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const messages = (await getMessages({
    locale: defaultLocale.value
  })) as unknown as IntlMessages;

  const paths = values(messages.nav);

  return paths.map((p) => ({
    url: `${baseUrl}${p.href}`,
    lastModified: new Date()
  }));
};

export default sitemap;
