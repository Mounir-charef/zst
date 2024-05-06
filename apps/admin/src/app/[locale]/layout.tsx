import { Providers, SessionProvider } from '@mono/ui';
import { cn } from '@mono/util';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages, useTimeZone } from 'next-intl';
import AppProvider from '../../contexts/appContext';
import './global.css';
import { availableLocalesMap, defaultLocale } from '../../../i18n/locales';
import { Toaster } from 'sonner';
import { getAuthSession } from '../../config/auth/auth';
import { getMessages, getTimeZone } from 'next-intl/server';

export const metadata = {
  title: 'Welcome to admin',
  description: 'Generated by alger',
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const timezone = await getTimeZone();
  const { langDir, hrefLang } = availableLocalesMap[locale] || defaultLocale;
  const session = await getAuthSession();
  return (
    <html lang={hrefLang} dir={langDir}>
      <body className={cn('font-sans antialiased', inter.className)}>
        <Providers>
          <NextIntlClientProvider messages={messages} timeZone={timezone}>
            <SessionProvider session={session}>
              <AppProvider>{children}</AppProvider>
            </SessionProvider>
            <Toaster richColors closeButton position="top-right" />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
