import { MetadataRoute } from 'next';

export default (): MetadataRoute.Robots => {
  const baseUrl = process.env.URL ?? 'http://localhost:3000';

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`
  };
};
