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
        className
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
        'h-[76px] bg-white border-b sticky top-0 px-5 lg:px-8 flex items-center transition-all',
        isCollapsed ? 'lg:ml-[96px]' : 'lg:ml-[280px]'
      )}
    >
      <div className="flex items-center gap-6 flex-1 pr-5 lg:pr-8 justif">
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
      <HeaderProfile />
    </header>
  );
};

export default Header;
