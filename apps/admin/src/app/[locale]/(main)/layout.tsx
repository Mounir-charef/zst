'use client';

import React from 'react';
import Header from '../../../components/header/Header';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useAppContext } from '../../../contexts/appContext';
import { cn } from '@mono/util';
import SidebarMobile from '../../../components/sidebar/SidebarMobile';
import Footer from '../../../components/footer/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();
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
      {/* <Footer /> */}
      <SidebarMobile />
    </div>
  );
};

export default MainLayout;
