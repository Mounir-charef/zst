import createMiddleware from 'next-intl/middleware';
import { type NextRequest } from 'next/server';
import { localePrefix, locales } from './navigation';

const nextIntlMiddleware = createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix,
});

const middleware = (request: NextRequest) => {
  const res = nextIntlMiddleware(request);

  // if no currency cookie is set, set it to default
  if (!request.cookies.has('currency')) {
    res.cookies.set('currency', 'DZD', { httpOnly: true });
  }
  return res;
};

export default middleware;

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
