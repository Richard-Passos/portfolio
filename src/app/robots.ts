import { MetadataRoute } from 'next';
import { BASE_URL } from '@/common/BASE_URL';

export default (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: BASE_URL,
    sitemap: `${BASE_URL}/sitemap.xml`
  };
};
