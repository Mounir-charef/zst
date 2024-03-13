'use client';

import { useState } from 'react';
import SidebarLinkItem from './SidebarLinkItem';
import { useSelectedLayoutSegment } from 'next/navigation';
import links from './data';
import { cn } from '@mono/util';

const Sidebar = () => {
  const segment = useSelectedLayoutSegment();

  const [collapsedItem, setCollapsedItem] = useState<null | string>(() => {
    const groupedlinks = Object.entries(links);

    for (let i = 0; i < groupedlinks.length; i++) {
      const [key, content] = groupedlinks[i];
      const { links: contentLinks } = content;
      for (let j = 0; j < contentLinks.length; j++) {
        const link = contentLinks[j];
        if (link.segment === segment) {
          return `${key}-${link.id}`;
        }
      }
    }

    return null;
  });

  return (
    <aside
      className={cn(
        'sticky top-20 z-10 h-[calc(100vh-80px)] w-[250px] overflow-y-auto bg-gray-100  transition-all duration-150 ease-in-out '
      )}
    >
      <div className="flex flex-col gap-5 py-4 sticky top-0">
        {Object.entries(links).map(([key, content]) => {
          const { links, title } = content;
          return (
            <div key={key}>
              {title && (
                <h2 className="mb-2 px-4 text-sm font-semibold uppercase">
                  {title}
                </h2>
              )}
              <ul>
                {links.map((link) => {
                  return (
                    <SidebarLinkItem
                      parent={key}
                      collapsedItem={collapsedItem}
                      setCollapsedItem={setCollapsedItem}
                      key={link.id}
                      link={link}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
