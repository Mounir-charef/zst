import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './navigation';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as never)) notFound();

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('./locales/en.json')
        : import(`./locales/${locale}.json`))
    ).default,
  };
});
