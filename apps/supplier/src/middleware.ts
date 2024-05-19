import createMiddleware from 'next-intl/middleware';
import { availableLocaleCodes, defaultLocale } from '../i18n/locales';

export default createMiddleware({
  // A list of all locales that are supported
  locales: availableLocaleCodes,

  // Used when no locale matches
  defaultLocale: defaultLocale.code,

  // Always use a Locale as a prefix for routing
  localePrefix: 'always',
});

// We only want the middleware to run on the `/` route
// to redirect users to their preferred locale

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|fr|ar)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
