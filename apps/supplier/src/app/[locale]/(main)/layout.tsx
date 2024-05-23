import React from 'react';
import { redirect } from '../../../navigation';
import { getAuthSession } from '../../../lib/auth/auth';
import MainLayout from './_component/MainLayout';
import { AppProvider } from '../../../components/AppProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getAuthSession();
  if (!session || session.error) {
    redirect('/sign-in');
  }
  return (
    <AppProvider defaultStatus="collapsed">
      <MainLayout>{children}</MainLayout>
    </AppProvider>
  );
};

export default Layout;
