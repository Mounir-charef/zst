'use client';

import { cn } from '@mono/util';
import { ReactNode, memo } from 'react';
import { useAppContext } from '../../../contexts/appContext';

const Template = ({ children }: { children: ReactNode }) => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();
  return (
    <main
      className={cn(
        'p-5 md:p-8 flex-1 bg-accent transition-all will-change-auto',
        isCollapsed ? 'lg:ml-[96px]' : 'lg:ml-[280px]'
      )}
    >
      {children}
    </main>
  );
};

export default memo(Template);
