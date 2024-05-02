import React from 'react';
import sidebarLinks from '../../data/sidebarLinks';
import SidebarLinkItem from './SidebarLinkItem';
import { useAppContext } from '../../contexts/appContext';
import { cn } from '@mono/util';

const SidebarContent = () => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();
  return (
    <div className="flex-1 overflow-y-scroll overflow-x-visible sidebar-content">
      <div className="sidebar-content">
        {Object.entries(sidebarLinks).map(([key, content]) => {
          const { title, links } = content;
          return (
            <div
              key={key}
              className={cn(
                'py-6 pb-3 px-5',
                isCollapsed && 'lg:border-b lg:border-dashed py-4 pb-4'
              )}
            >
              {title && (
                <h2
                  className={cn(
                    'uppercase text-body/60 font-semibold text-xs mb-5 px-4',
                    isCollapsed && 'lg:hidden'
                  )}
                >
                  {title}
                </h2>
              )}
              <ul className="flex flex-col gap-2">
                {links.map((link) => {
                  return <SidebarLinkItem key={link.id} link={link} />;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarContent;
