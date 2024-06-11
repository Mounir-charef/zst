import { DashboardIcon } from '@radix-ui/react-icons';
import {
  BoxIcon,
  Package,
  Package2,
  PieChart,
  SettingsIcon,
} from 'lucide-react';
import { NavigationItem } from './types/navigation';

export const userMenuLinks = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <DashboardIcon className="size-4" />,
    desktopOnly: true,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <SettingsIcon className="size-4" />,
    desktopOnly: false,
  },
] as const;

export const NavItems = [
  {
    type: 'link',
    title: 'Dashboard',
    href: '/',
    icon: <DashboardIcon className="size-4" />,
  },
  {
    type: 'menu',
    title: 'Market',
    icon: <BoxIcon className="size-4" />,
    children: [
      {
        title: 'Marketplace',
        href: '/market',
        description: 'Discover our latest offers and get best deals',
      },
    ],
  },
  {
    type: 'link',
    title: 'Products',
    icon: <Package className="size-4" />,
    href: '/products',
  },
  {
    type: 'link',
    title: 'Auctions',
    icon: <PieChart className="size-4" />,
    href: '/auctions',
  },
  {
    type: 'link',
    title: 'Orders',
    icon: <Package2 className="size-4" />,
    href: '/orders',
  },
  {
    type: 'link',
    title: 'Settings',
    href: '/settings',
    icon: <SettingsIcon className="size-4" />,
  },
] satisfies NavigationItem[];
