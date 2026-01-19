import { hasLocale } from 'next-intl';

import { locales } from '@/constants';
import routing from '@/i18n/routing';

const isLocale = (
  value?: string | null
): value is (typeof locales)[number]['value'] =>
  hasLocale(routing.locales, value);

export default isLocale;
