import { BASE_URL } from '@/common/BASE_URL';
import { getMultilingualUrls } from 'intlayer';
import { MetadataRoute } from 'next';

export default (): MetadataRoute.Sitemap => [
  {
    url: BASE_URL,
    alternates: {
      languages: {
        ...getMultilingualUrls(''),
        'x-default': ''
      }
    },
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  }
];
