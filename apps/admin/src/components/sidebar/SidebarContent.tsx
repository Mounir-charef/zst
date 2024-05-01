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
    <div className="flex-1">
      {Object.entries(sidebarLinks).map(([key, content]) => {
        const { title, links } = content;
        return (
          <div key={key} className="py-6 pb-3 px-5">
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
            <ul>
              {links.map((link) => {
                return <SidebarLinkItem key={link.id} link={link} />;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContent;
