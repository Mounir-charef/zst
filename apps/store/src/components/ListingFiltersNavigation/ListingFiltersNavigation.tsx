'use client';

import { cn } from '@mono/util';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import SidebarLinkItem from './SidebarLinkItem';
import { TLinks } from './types';

export type TSelectedNavItem = undefined | { parent?: string; child?: string };
const ListingFiltersNavigation = ({ links }: { links: TLinks }) => {
  const searchParams = useSearchParams();

  const selectedCategory = Object.fromEntries(searchParams.entries()).category;

  const [selectedNavItem, setSelectedNavItem] = useState<TSelectedNavItem>();

  useEffect(() => {
    const link = links?.find((link) => {
      return (
        link.segment === selectedCategory ||
        !!link.children
          ?.flatMap((child) => child.segment)
          ?.includes(selectedCategory)
      );
    });

    setSelectedNavItem({
      parent: link?.segment,
      child: link?.children?.find((child) => child.segment === selectedCategory)
        ?.segment,
    });
  }, [links, selectedCategory]);

  return (
    <aside
      className={cn(
        'sticky top-20 z-10 h-[calc(100vh-80px)] w-[250px] overflow-y-auto p-4 bg-white  transition-all duration-150 ease-in-out '
      )}
    >
      <div className="flex flex-col gap-5 py-4 sticky top-0">
        <ul>
          {links.map((link) => {
            return (
              <SidebarLinkItem
                selectedNavItem={selectedNavItem}
                setSelectedNavItem={setSelectedNavItem}
                key={link.id}
                link={link}
              />
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ListingFiltersNavigation;
