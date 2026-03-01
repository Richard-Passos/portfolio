import { defineRouting } from 'next-intl/routing';

import { DEFAULT_LOCALE, LOCALES } from '@/common';
import { keys } from '@/utils';

const routing = defineRouting({
  locales: keys(LOCALES),
  defaultLocale: DEFAULT_LOCALE.value
});

export default routing;
