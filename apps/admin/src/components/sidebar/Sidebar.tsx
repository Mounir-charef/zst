'use client';

import React from 'react';
import HeadingLargeLogo from '../common/HeadingLargeLogo';
import SidebarContent from './SidebarContent';
import { useAppContext } from '../../contexts/appContext';
import routesConfig from '../../config/routesConfig';
import Image from 'next/image';
import { cn } from '@mono/util';
import { Link } from '../../navigation';
import { useTheme } from 'next-themes';
import themeConfig from '../../config/themeConfig';

const Sidebar = () => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();

  const { theme } = useTheme();

  return (
    <>
      <aside
        className={cn(
          'bg-background fixed left-0 top-0 z-40 hidden h-full flex-col border-r transition-all lg:flex',
          isCollapsed ? 'w-[96px]' : 'w-[280px]',
        )}
      >
        <div className="flex h-[76px] items-center border-b px-8">
          {isCollapsed ? (
            <Link href={routesConfig.dashboard}>
              <Image
                width={32}
                height={32}
                src={
                  theme === themeConfig.LIGHT
                    ? '/images/logo-sm.png'
                    : '/images/logo-sm-dark.png'
                }
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
