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
import NextTopLoader from 'nextjs-toploader';

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
  const [messages, timezone, session] = await Promise.all([
    getMessages(),
    getTimeZone(),
    getAuthSession(),
  ]);

  const { langDir, hrefLang } = availableLocalesMap[locale] || defaultLocale;
  return (
    <html
      lang={hrefLang}
      dir={langDir}
      className="h-full"
      suppressHydrationWarning
    >
      <body className={cn('h-full font-sans antialiased', inter.className)}>
        <Providers>
          <NextIntlClientProvider messages={messages} timeZone={timezone}>
            <SessionProvider session={session}>
              <AppProvider>
                <NextTopLoader
                  color={'hsl(var(--primary))'}
                  showSpinner={false}
                />
                {children}
              </AppProvider>
            </SessionProvider>
            <Toaster richColors closeButton position="top-right" />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
