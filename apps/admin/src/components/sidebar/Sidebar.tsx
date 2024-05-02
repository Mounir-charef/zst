'use client';

import React from 'react';
import HeadingLargeLogo from '../common/HeadingLargeLogo';
import SidebarContent from './SidebarContent';
import { useAppContext } from '../../contexts/appContext';
import Link from 'next/link';
import routesConfig from '../../config/routesConfig';
import Image from 'next/image';
import { cn } from '@mono/util';

const Sidebar = () => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();
  return (
    <>
      <aside
        className={cn(
          'fixed top-0 left-0 bg-white h-full border-r lg:flex flex-col hidden transition-all',
          isCollapsed ? 'w-[96px]' : 'w-[280px]'
        )}
      >
        <div className="flex items-center h-[76px] border-b px-8">
          {isCollapsed ? (
            <Link href={routesConfig.dashboard}>
              <Image
                width={32}
                height={32}
                src={'/images/logo-sm.webp'}
                alt=""
              />
            </Link>
          ) : (
            <HeadingLargeLogo />
          )}
        </div>
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;
