'use client';

import { IoChevronForward } from 'react-icons/io5';
import React, { useRef } from 'react';
import { cn, useDisclosure } from '@mono/util';
import { SidebarLink } from '../../data/sidebarLinks';
import { useAppContext } from '../../contexts/appContext';
import SidebarLinkItemSublinks from './SidebarLinkItemSublinks';
import { Link } from '../../navigation';

interface TProps {
  link: SidebarLink;
}

const SidebarLinkItem = ({ link }: TProps) => {
  const { id, href, Icon, title, children } = link;
  const hasChildren = !!(children && children?.length > 0);

  const liRef = useRef<HTMLLIElement>(null);

  const { isOpen: isSubMenuOpen, toggle: toggleSubMenu } = useDisclosure();
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();

  return (
    <li ref={liRef} onClick={toggleSubMenu}>
      <Link
        href={href || '#'}
        className={cn(
          'flex items-center justify-between px-4 py-2 text-sm transition text-gray-700 rounded-md hover:bg-gray-100',
          isCollapsed && 'lg:hover:text-primary lg:hover:bg-transparent'
        )}
        onClick={(e) => {
          if (!href || href === '#' || hasChildren) {
            e.preventDefault();
          }
        }}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={20} />}
          <span className={cn(isCollapsed && 'lg:hidden')}>{title}</span>
        </div>
        {hasChildren && (
          <IoChevronForward
            size={14}
            className={cn(
              'duration-[400ms] transition',
              isCollapsed && 'lg:hidden',
              isSubMenuOpen && 'rotate-90'
            )}
          />
        )}
      </Link>
      <SidebarLinkItemSublinks
        children={children}
        liRef={liRef}
        isSubMenuOpen={isSubMenuOpen}
      />
    </li>
  );
};

export default SidebarLinkItem;
