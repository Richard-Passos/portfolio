import type { MetadataRoute } from 'next';

import { defaultLocale } from '@/constants/locales';
import { personalApi } from '@/utils/actions';

const manifest = async (): Promise<MetadataRoute.Manifest> => {
  const res = await personalApi.get({ locale: defaultLocale.value });

  const personal = res.ok ? res.data : undefined;

  return {
    name: personal?.title,
    short_name: `${personal?.name.first} ${personal?.name.last}`,
    description: personal?.description,
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#fafafa',
    icons: [
      {
        src: './favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      },
      {
        src: './android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: './android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
};

export default manifest;
