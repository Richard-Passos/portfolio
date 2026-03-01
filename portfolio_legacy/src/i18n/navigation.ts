import { createNavigation } from 'next-intl/navigation';

import routing from './routing';

export { useLocale } from 'next-intl';
export { useSearchParams } from 'next/navigation';
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
