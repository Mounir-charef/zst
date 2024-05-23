'use client';

import { cn } from '@mono/util';
import { memo } from 'react';
import { useAppContext } from '../../../../components/AppProvider';
import Navbar from '../../../../components/navbar/Navbar';
import Sidebar from '../../../../components/sidebar/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useAppContext();
  return (
    <div className="bg-muted/40 flex min-h-screen w-full flex-col">
      <Navbar />

      <Sidebar />

      <main
        className={cn(
          'max-w-6xl flex-1 p-2 transition-[margin] will-change-auto md:ms-14 md:p-8',
          {
            'md:ms-64': isOpen,
          },
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default memo(MainLayout);
