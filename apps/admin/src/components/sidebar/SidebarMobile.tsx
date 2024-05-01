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
          'fixed top-0 left-0 w-full z-50 h-screen max-w-md bg-white flex flex-col transition-transform duration-500 ',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between px-8 py-5 border-b items-center">
          <HeadingLargeLogo />
          <button
            onClick={closeSidebar}
            className="w-7 h-7 rounded-full border bg-gray-200 flex items-center justify-center"
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
