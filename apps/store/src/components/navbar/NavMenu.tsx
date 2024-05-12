'use client';

import { ReactNode, memo, useState } from 'react';
import { NavItems } from '../../config';
import { Link } from '../../navigation';
import { buttonVariants } from '@mono/ui';
import HoverMenu from './HoverMenu';

export interface BaseItem {
  title: string;
  icon: ReactNode;
}

export interface NavigationLink extends BaseItem {
  type: 'link';
  href: string;
}

export interface NavigationMenu extends BaseItem {
  type: 'menu';
  children: {
    title: string;
    href: string;
  }[];
}

export type NavigationItem = NavigationLink | NavigationMenu;

const NavMenu = () => {
  return (
    <nav className="flex items-center">
      {NavItems.map((item) => {
        console.log(item);
        if (item.type === 'link') {
          return (
            <Link
              key={item.title}
              href={item.href}
              aria-label={item.title}
              className={buttonVariants({
                variant: 'ghost',
                className: 'items-center gap-2 font-light',
              })}
            >
              {item.icon} {item.title}
            </Link>
          );
        }
        return <HoverMenu {...item} />;
      })}
    </nav>
  );
};

export default memo(NavMenu);
