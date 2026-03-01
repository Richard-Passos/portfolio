import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.PORTUGUESE],
    defaultLocale: Locales.ENGLISH,
    strictMode: 'strict'
  },
  routing: {
    mode: 'prefix-all'
  },
  content: {
    fileExtensions: ['.data.ts', '.data.tsx', '.metadata.ts', '.metadata.tsx']
  }
};

export default config;
