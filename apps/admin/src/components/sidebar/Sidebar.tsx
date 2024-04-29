'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import sidebarLinks from '../../data/sidebarLinks';
import SidebarLinkItem from './SidebarLinkItem';

const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-[280px] bg-white h-full border-r flex flex-col">
        <Link href={'/'} className="flex items-center h-[76px] border-b px-8">
          <Image src={'/images/logo.webp'} alt="" width={138} height={34} />
        </Link>
        <div className="flex-1">
          {Object.entries(sidebarLinks).map(([key, content]) => {
            const { title, links } = content;
            return (
              <div key={key} className="py-6 pb-3 px-5">
                {title && (
                  <h2 className="uppercase text-body/60 font-semibold text-xs mb-5 px-4">
                    {title}
                  </h2>
                )}
                <ul>
                  {links.map((link) => {
                    return (
                      <SidebarLinkItem
                        parent={key}
                        //   collapsedItem={collapsedItem}
                        //   setCollapsedItem={setCollapsedItem}
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
    </>
  );
};

export default Sidebar;
