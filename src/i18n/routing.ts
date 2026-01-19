import { defineRouting } from 'next-intl/routing';

import { locales } from '@/constants';
import { defaultLocale } from '@/constants/locales';

const routing = defineRouting({
  locales: locales.map((l) => l.value),
  defaultLocale: defaultLocale.value
});

export default routing;
