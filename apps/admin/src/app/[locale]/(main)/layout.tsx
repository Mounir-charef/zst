import { cn } from '@mono/util';
import React from 'react';
import Header from '../../../components/header/Header';
import Sidebar from '../../../components/sidebar/Sidebar';
import SidebarMobile from '../../../components/sidebar/SidebarMobile';
import { getAuthSession } from '../../../config/auth/auth';
import { redirect } from '../../../navigation';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getAuthSession();
  if (!session) {
    redirect('/sign-in');
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Sidebar />
      {children}
      <SidebarMobile />
    </div>
  );
};

export default MainLayout;
