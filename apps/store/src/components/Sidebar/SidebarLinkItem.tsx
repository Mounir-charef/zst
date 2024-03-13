'use client';

import { Collapse } from '@mono/ui';
import { cn } from '@mono/util';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { TLink } from './data';

interface TProps {
  link: TLink;
  collapsedItem?: null | string;
  parent?: string;
  setCollapsedItem?: React.Dispatch<React.SetStateAction<null | string>>;
}

const SidebarLinkItem = ({
  link,
  parent,
  collapsedItem,
  setCollapsedItem,
}: TProps) => {
  const { id, href, Icon, title, children } = link;
  const hasChildren = children && children?.length > 0;

  const collapseID = `${parent}-${id}`;
  const isSubLinksVisible = collapsedItem === collapseID;

  return (
    <li
      onClick={() => {
        if (hasChildren && setCollapsedItem) {
          setCollapsedItem((current) => {
            if (current === collapseID) {
              return null;
            }
            return collapseID;
          });
        }
      }}
    >
      <Link
        href={href || '#'}
        className={cn(
          'flex items-center justify-between px-4 py-2 text-sm transition hover:text-primary',
          { 'text-primary': isSubLinksVisible }
        )}
        onClick={(e) => {
          if (!href || href === '#' || hasChildren) {
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
              return <SidebarLinkItem key={child.id} link={child} />;
            })}
          </ul>
        </Collapse>
      )}
    </li>
  );
};

export default SidebarLinkItem;
