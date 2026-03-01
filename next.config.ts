import { type NextConfig } from 'next';
import { withIntlayer } from 'next-intlayer/server';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks']
  }
};

export default withIntlayer(nextConfig);
