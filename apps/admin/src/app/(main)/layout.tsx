import React from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Sidebar />
      <main className="p-5 md:p-8 bg-[#f3f4f6] ml-[280px] flex-1">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
