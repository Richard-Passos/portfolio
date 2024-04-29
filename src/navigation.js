import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['en', 'pt'];

const sharedPathnamesNavigation = createSharedPathnamesNavigation({ locales });

export { locales };
export const { Link, redirect, usePathname, useRouter } =
  sharedPathnamesNavigation;
