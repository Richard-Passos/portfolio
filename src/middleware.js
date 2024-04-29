import createMiddleware from 'next-intl/middleware';

import { locales } from '@/navigation';

const middleware = createMiddleware({
  locales,
  defaultLocale: locales[0],
});

export default middleware;
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
