'use client';

import { IoChevronForward } from 'react-icons/io5';
import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';
import { cn, useDisclosure } from '@mono/util';
import { Collapse } from '@mono/ui';
import { SidebarLink } from '../../data/sidebarLinks';

interface TProps {
  link: SidebarLink;
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

  const { isOpen, toggle } = useDisclosure();

  return (
    <li
      onClick={() => {
        toggle();
      }}
    >
      <Link
        href={href || '#'}
        className={cn(
          'flex items-center justify-between px-4 py-2 text-sm transition text-gray-700 hover:bg-gray-100 rounded-md'
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
          <IoChevronForward
            size={14}
            className={cn('duration-[400ms] transition', isOpen && 'rotate-90')}
          />
        )}
      </Link>
      {hasChildren && (
        <Collapse isOpen={isOpen}>
          <div className="pl-6 py-1">
            <ul
              className="border-l border-dashed flex flex-col gap-0.5"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children.map((child) => {
                return (
                  <li key={child.id}>
                    <Link
                      className={cn(
                        'text-sm hover:text-primary inline-block pl-5 py-2 border-dashed relative text-dark text-text-color',
                        'before:absolute before:left-0.5 before:top-1/2 before:-translate-y-1/2 before:w-3 before:border-dashed before:border'
                      )}
                      href={child.href}
                    >
                      {child.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Collapse>
      )}
    </li>
  );
};

export default SidebarLinkItem;
