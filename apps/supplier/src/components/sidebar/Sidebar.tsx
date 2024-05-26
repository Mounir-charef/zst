'use client';

import { Button, TooltipProvider } from '@mono/ui';
import { cn } from '@mono/util';
import { Menu } from 'lucide-react';
import { memo } from 'react';
import { NavItems } from '../../config';
import { useAppContext } from '../AppProvider';
import SidebarLink from './SidebarLink';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useAppContext();
  return (
    <aside
      className={cn(
        'bg-background fixed inset-y-0 start-0 hidden w-14 space-y-8 border-e px-2 py-2 transition-all md:block',
        {
          'w-64': isOpen,
        },
      )}
    >
      <Button
        variant="ghost"
        className="size-10 p-0"
        onClick={() => toggleSidebar()}
      >
        <Menu className="size-5" />
      </Button>
      <nav className="flex h-full flex-grow flex-col gap-4">
        <TooltipProvider>
          {NavItems.map((item) => {
            if (item.type === 'link')
              return <SidebarLink key={item.title} {...item} />;

            return <SidebarMenu key={item.title} {...item} />;
          })}
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default memo(Sidebar);
