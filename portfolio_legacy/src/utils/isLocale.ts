import { hasLocale } from 'next-intl';

import routing from '@/i18n/routing';
import { Locale } from '@/types';

const isLocale = (value?: string | null): value is Locale =>
  hasLocale(routing.locales, value);

export { isLocale };
