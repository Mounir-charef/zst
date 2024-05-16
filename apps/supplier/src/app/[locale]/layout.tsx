import { Providers } from '@mono/ui';
import { cn } from '@mono/util';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTimeZone } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { availableLocalesMap, defaultLocale } from '../../../i18n/locales';
import './global.css';
import Navbar from '../../components/navbar/Navbar';

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
            <main className="flex h-full flex-col px-2 pt-20">
              <Navbar />
              {children}
            </main>
            <Toaster richColors closeButton position="top-right" />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
