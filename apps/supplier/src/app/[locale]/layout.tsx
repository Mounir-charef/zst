import { cn } from '@mono/util';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTimeZone } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { availableLocalesMap, defaultLocale } from '../../../i18n/locales';
import { Providers } from '../../components/Providers';
import '../../global.css';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Welcome to supplier',
  description: 'Welcome to supplier portal for zst-ecommerce',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon.ico',
        href: '/favicon-dark.ico',
      },
    ],
  },
};

const inter = Inter({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [messages, timezone] = await Promise.all([
    getMessages(),
    getTimeZone(),
  ]);

  const { langDir, hrefLang } = availableLocalesMap[locale] || defaultLocale;
  return (
    <html
      lang={hrefLang}
      dir={langDir}
      className="h-full"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'text-foreground bg-background h-full font-sans antialiased',
          inter.className,
        )}
      >
        <SessionProvider>
          <NextIntlClientProvider messages={messages} timeZone={timezone}>
            <Providers>
              {children}
              <Toaster richColors closeButton position="top-right" />
            </Providers>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
