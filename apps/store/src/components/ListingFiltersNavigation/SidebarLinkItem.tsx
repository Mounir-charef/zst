'use client';

import { Collapse } from '@mono/ui';
import { cn } from '@mono/util';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { TLink } from './types';
import { TSelectedNavItem } from './ListingFiltersNavigation';

interface TProps {
  link: TLink;
  selectedNavItem?: TSelectedNavItem;
  parent?: string;
  setSelectedNavItem?: React.Dispatch<React.SetStateAction<TSelectedNavItem>>;
}

const SidebarLinkItem = ({
  link,
  parent,
  selectedNavItem,
  setSelectedNavItem,
}: TProps) => {
  const { href, Icon, title, children } = link;
  const hasChildren = children && children?.length > 0;

  const isSelected = hasChildren
    ? selectedNavItem?.parent === link.segment
    : selectedNavItem?.child === link.segment;

  const isSubLinksVisible = isSelected;

  return (
    <li>
      <Link
        href={href || '#'}
        className={cn(
          'flex items-center font-medium justify-between px-4 py-2 text-sm transition hover:text-primary',
          { 'text-primary': isSubLinksVisible }
        )}
        onClick={(e) => {
          if (!href || href === '#') {
            e.preventDefault();
          }
        }}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={20} />}
          <span>{title}</span>
        </div>
        {hasChildren && (
          <ChevronLeft
            size={20}
            className={cn(
              'duration-[400ms] transition',
              isSubLinksVisible && '-rotate-90'
            )}
          />
        )}
      </Link>
      {hasChildren && (
        <Collapse isOpen={isSubLinksVisible}>
          <ul
            className="pl-8"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children.map((child) => {
              return (
                <SidebarLinkItem
                  selectedNavItem={selectedNavItem}
                  key={child.segment}
                  link={child}
                />
              );
            })}
          </ul>
        </Collapse>
      )}
    </li>
  );
};

export default SidebarLinkItem;
