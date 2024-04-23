import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { locales } from './constants';
import { normKey } from './utils';
  
const i18nConfig = getRequestConfig(async ({ locale }) => {
  locale = normKey(locale)

  if (!locales.includes(locale)) notFound();
 
  return {
    message: (await import(`@/data/${locale}.json`))?.default
  };
});

export default i18nConfig