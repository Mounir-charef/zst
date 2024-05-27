'use client';

import { Button, TooltipProvider } from '@mono/ui';
import { cn } from '@mono/util';
import { Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import { memo } from 'react';
import { useAppContext } from '../AppProvider';
import SidebarNavigation from './SidebarNavigation';

const ThemeToggler = dynamic(() => import('./ThemeToggler'), {
  ssr: false,
});

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useAppContext();
  return (
    <aside
      className={cn(
        'bg-background fixed inset-y-0 start-0 hidden w-14 flex-col gap-y-8 border-e px-2 py-2 transition-all md:flex',
        {
          'w-64': isOpen,
        },
      )}
    >
      <TooltipProvider>
        <Button
          variant="ghost"
          className="mt-1 size-10 p-0"
          onClick={() => toggleSidebar()}
        >
          <Menu className="size-5" />
        </Button>
        <SidebarNavigation />
        <ThemeToggler />
      </TooltipProvider>
    </aside>
  );
};

export default memo(Sidebar);
