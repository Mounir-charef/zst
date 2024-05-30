'use client';

import React from 'react';
import Overlay from '../ui/Overlay';
import HeadingLargeLogo from '../common/HeadingLargeLogo';
import { IoIosClose } from 'react-icons/io';
import SidebarContent from './SidebarContent';
import { useAppContext } from '../../contexts/appContext';
import { cn } from '@mono/util';

const SidebarMobile = () => {
  const {
    closeSidebar,
    sidebarStatus: { isOpen },
  } = useAppContext();
  return (
    <div className="lg:hidden">
      <Overlay onClick={closeSidebar} isVisible={isOpen} />
      <div
        className={cn(
          'bg-background fixed left-0 top-0 z-50 flex h-screen w-full max-w-md flex-col transition-transform duration-500 ',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b px-8 py-5">
          <HeadingLargeLogo />
          <button
            onClick={closeSidebar}
            className="bg-muted flex h-7 w-7 items-center justify-center rounded-full border"
          >
            <IoIosClose size={16} />
          </button>
        </div>
        <SidebarContent />
      </div>
    </div>
  );
};

export default SidebarMobile;
