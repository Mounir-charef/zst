'use client';

import React, { useEffect } from 'react';
import Header from '../../../components/header/Header';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useAppContext } from '../../../contexts/appContext';
import { cn } from '@mono/util';
import SidebarMobile from '../../../components/sidebar/SidebarMobile';
import { useSession } from 'next-auth/react';
import { useRouter } from '../../../navigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();

  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Sidebar />
      <main
        className={cn(
          'p-5 md:p-8 bg-[#f3f4f6] flex-1 transition-all',
          isCollapsed ? 'lg:ml-[96px]' : 'lg:ml-[280px]'
        )}
      >
        {children}
      </main>
      <SidebarMobile />
    </div>
  );
};

export default MainLayout;
