import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.PORTUGUESE],
    defaultLocale: Locales.ENGLISH
  },
  content: {
    fileExtensions: ['.data.ts', '.data.tsx', '.metadata.ts', '.metadata.tsx']
  }
};

export default config;
