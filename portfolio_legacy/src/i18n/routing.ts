import { defineRouting } from 'next-intl/routing';

import { DEFAULT_LOCALE, LOCALES } from '@/constants';
import { keys } from '@/utils';

const routing = defineRouting({
  locales: keys(LOCALES),
  defaultLocale: DEFAULT_LOCALE.value
});

export default routing;
