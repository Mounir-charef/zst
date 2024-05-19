'use client';

import { Input } from '@mono/ui';
import React from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { IoIosSearch } from 'react-icons/io';
import HeaderProfile from './HeaderProfile';
import { useAppContext } from '../../contexts/appContext';
import { cn } from '@mono/util';
import HeadingLargeLogo from '../common/HeadingLargeLogo';
import HeaderSearch from './HeaderSearch';
import UserMenu from '../UserMenu';
import Link from 'next/link';
import Image from 'next/image';
import routesConfig from '../../config/routesConfig';

const HeaderMenuIcon = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <CgMenuLeft
      onClick={onClick}
      className={cn(
        'hover:text-primary cursor-pointer transition-all',
        className,
      )}
      size={28}
    />
  );
};

const Header = () => {
  const {
    collapseSidebar,
    openSidebar,
    sidebarStatus: { isCollapsed },
  } = useAppContext();

  return (
    <header
      className={cn(
        'bg-background sticky top-0 z-10 flex h-[76px] items-center border-b px-5 transition-all lg:px-8',
        isCollapsed ? 'lg:ml-[96px]' : 'lg:ml-[280px]',
      )}
    >
      <div className="justif flex flex-1 items-center gap-6 pr-5 lg:pr-8">
        <div className="flex items-center gap-4">
          <HeaderMenuIcon
            onClick={collapseSidebar}
            className="hidden lg:inline-block"
          />
          <HeaderMenuIcon onClick={openSidebar} className="lg:hidden" />
          <HeadingLargeLogo className="lg:hidden" />
        </div>
        <HeaderSearch />
      </div>
      <UserMenu />
    </header>
  );
};

export default Header;
