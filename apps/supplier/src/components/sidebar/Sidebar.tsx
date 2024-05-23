'use client';

import { Button } from '@mono/ui';
import { cn } from '@mono/util';
import { memo, useState } from 'react';
import { useAppContext } from '../AppProvider';
import { Menu } from 'lucide-react';

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useAppContext();
  return (
    <aside
      className={cn(
        'bg-background fixed inset-y-0 start-0 hidden w-14 items-center gap-4 border-e px-2 py-2 transition-all md:block',
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
      <nav className="flex h-full flex-grow flex-col gap-4"></nav>
    </aside>
  );
};

export default memo(Sidebar);
