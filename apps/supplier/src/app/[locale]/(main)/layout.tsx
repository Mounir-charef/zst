import React from 'react';
import { redirect } from '../../../navigation';
import { AppProvider } from '../../../components/AppProvider';
import { auth } from '../../../lib/auth/auth';
import MainLayout from './_component/MainLayout';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session || !session.user) {
    redirect('/sign-in');
  }
  return (
    <AppProvider defaultStatus="collapsed">
      <MainLayout>{children}</MainLayout>
    </AppProvider>
  );
};

export default Layout;
