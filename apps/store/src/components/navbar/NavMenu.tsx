'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@mono/ui';
import { cn } from '@mono/util';
import * as React from 'react';
import { NavItems } from '../../config';
import { Link } from '../../navigation';

export interface BaseItem {
  title: string;
  icon: React.ReactNode;
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
    description?: string;
  }[];
}

export type NavigationItem = NavigationLink | NavigationMenu;

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NavItems.map((item) => {
          if (item.type === 'link')
            return (
              <NavigationMenuItem key={item.title}>
                <Link
                  href={item.href}
                  className={navigationMenuTriggerStyle({
                    className: 'gap-1',
                  })}
                >
                  {item.icon} <span>{item.title}</span>
                </Link>
              </NavigationMenuItem>
            );

          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuTrigger className="gap-1">
                {item.icon} <span>{item.title}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {item.children.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default React.memo(NavMenu);
