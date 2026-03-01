import { MetadataRoute } from 'next';

import { baseUrl } from '@/common';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
};

export default robots;
