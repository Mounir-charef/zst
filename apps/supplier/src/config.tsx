import { DashboardIcon } from '@radix-ui/react-icons';
import {
  BoxIcon,
  Package,
  Package2,
  PieChart,
  SettingsIcon,
} from 'lucide-react';
import { SidebarLinkProps } from './components/sidebar/SidebarLink';
import { SidebarMenuProps } from './components/sidebar/SidebarMenu';

type SidebarLink = SidebarLinkProps & { type: 'link' };
type SidebarMenu = SidebarMenuProps & { type: 'menu' };

type SidebarItem = SidebarLink | SidebarMenu;

export const userMenuLinks = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <DashboardIcon className="size-4" />,
    desktopOnly: true,
  },
  {
    label: 'Settings',
    href: '#',
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
      {
        title: 'Auctions',
        href: '#',
        description: 'View all auctions',
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
    href: '#',
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
    href: '#',
    icon: <SettingsIcon className="size-4" />,
  },
] satisfies SidebarItem[];
