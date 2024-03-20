import '../../global.css';
import { Providers } from '@mono/ui';
import { cn } from '@mono/util';
import { Inter } from 'next/font/google';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/ListingFiltersNavigation/ListingFiltersNavigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import CartDrawer from '../../components/CartDrawer/CartDrawer';

export const metadata = {
  title: 'Welcome to store',
  description: 'Generated by create-nx-workspace',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = useMessages();
  return (
    <html lang="en" className="h-full">
      <body
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <main className="relative flex min-h-screen flex-col">
              <Navbar />
              {/* <CartDrawer /> */}
              <div>{children}</div>
            </main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
