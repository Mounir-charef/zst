'use client';

import { IoChevronForward } from 'react-icons/io5';
import React, { useEffect, useRef } from 'react';
import { cn, useDisclosure } from '@mono/util';
import { SidebarLink } from '../../data/sidebarLinks';
import { useAppContext } from '../../contexts/appContext';
import SidebarLinkItemSublinks from './SidebarLinkItemSublinks';
import { Link, usePathname } from '../../navigation';
import { ID } from '../../types/common';

interface TProps {
  link: SidebarLink;
  collapsedItems: ID[];
  setCollapsedItems: React.Dispatch<React.SetStateAction<ID[]>>;
}

const SidebarLinkItem = ({
  link,
  collapsedItems,
  setCollapsedItems,
}: TProps) => {
  const {
    sidebarStatus: { isCollapsed: isSidebarCollapsed },
  } = useAppContext();
  const liRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  const { id, href, Icon, title, children } = link;
  const hasChildren = !!(children && children?.length > 0);
  const isLinkActive = href === pathname;

  const isSubMenuOpen = collapsedItems.includes(id);
  const toggleSubMenu = () => {
    setCollapsedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const isLink = href && !hasChildren;
  const Wrapper = isLink ? Link : 'span';

  return (
    <li ref={liRef}>
      <Wrapper
        href={href || '#'}
        className={cn(
          'text-muted-foreground flex cursor-pointer items-center justify-between rounded-md px-4 py-2 text-sm transition',
          isLinkActive && !hasChildren
            ? 'bg-primary/10 text-primary'
            : `hover:bg-muted ${isSidebarCollapsed && 'lg:hover:text-primary lg:hover:bg-transparent'}`,
          isSubMenuOpen && 'bg-muted',
        )}
        onClick={(e) => {
          if (!href || href === '#' || hasChildren) {
            e.preventDefault();
            if (!isSidebarCollapsed) {
              toggleSubMenu();
            }
            return;
          }
        }}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={20} />}
          <span className={cn(isSidebarCollapsed && 'lg:hidden')}>{title}</span>
        </div>
        {hasChildren && (
          <IoChevronForward
            size={14}
            className={cn(
              'transition duration-[400ms]',
              isSidebarCollapsed && 'lg:hidden',
              isSubMenuOpen && 'rotate-90',
            )}
          />
        )}
      </Wrapper>
      <SidebarLinkItemSublinks
        children={children}
        liRef={liRef}
        isSubMenuOpen={isSubMenuOpen}
      />
    </li>
  );
};

export default SidebarLinkItem;
