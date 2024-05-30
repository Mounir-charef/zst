'use client';

import React, { useEffect, useState } from 'react';
import sidebarLinks, { SidebarLink } from '../../data/sidebarLinks';
import SidebarLinkItem from './SidebarLinkItem';
import { useAppContext } from '../../contexts/appContext';
import { cn } from '@mono/util';
import { usePathname } from '../../navigation';
import { ID } from '../../types/common';
import dynamic from 'next/dynamic';
// import SidebarThemeToggle from './SidebarThemeToggle';

const SidebarThemeToggle = dynamic(() => import('./SidebarThemeToggle'), {
  ssr: false,
});

const handleCollapsedItems = (pathname: string) => {
  const result: ID[] = [];
  const parentLinks = Object.values(sidebarLinks);
  parentLinks.forEach(({ links }) => {
    links.forEach((link) => {
      const activeLink = link.children?.find(
        (child) => child.href === pathname,
      );
      if (activeLink) {
        result.push(link.id);
      }
    });
  });

  return result;
};

const SidebarContent = () => {
  const pathname = usePathname();
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();

  const [collapsedItems, setCollapsedItems] = useState<ID[]>(() =>
    handleCollapsedItems(pathname),
  );

  useEffect(() => {
    setCollapsedItems(handleCollapsedItems(pathname));
  }, [pathname]);

  return (
    <>
      <div className="sidebar-content flex-1 overflow-x-visible overflow-y-scroll">
        <div className="sidebar-content">
          {Object.entries(sidebarLinks).map(([key, content]) => {
            const { title, links } = content;
            return (
              <div
                key={key}
                className={cn(
                  'px-5 py-6 pb-3',
                  isCollapsed && 'py-4 pb-4 lg:border-b lg:border-dashed',
                )}
              >
                {title && (
                  <h2
                    className={cn(
                      'text-foreground/60 mb-5 px-4 text-xs font-semibold uppercase',
                      isCollapsed && 'lg:hidden',
                    )}
                  >
                    {title}
                  </h2>
                )}
                <ul className="flex flex-col gap-2">
                  {links.map((link) => {
                    return (
                      <SidebarLinkItem
                        key={link.id}
                        collapsedItems={collapsedItems}
                        setCollapsedItems={setCollapsedItems}
                        link={link}
                      />
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <SidebarThemeToggle />
      </div>
    </>
  );
};

export default SidebarContent;
