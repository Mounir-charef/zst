import { DashboardIcon } from '@radix-ui/react-icons';
import {
  BoxIcon,
  Package,
  Package2,
  PieChart,
  SettingsIcon,
} from 'lucide-react';
import { NavigationItem } from './components/navbar/NavMenu';

export const NavItems: NavigationItem[] = [
  {
    type: 'link',
    title: 'Dashboard',
    href: '/',
    icon: <DashboardIcon className="h-4 w-4" />,
  },
  {
    type: 'menu',
    title: 'Market',
    icon: <BoxIcon className="h-4 w-4" />,
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
    icon: <Package className="h-4 w-4" />,
    href: '/products',
  },
  {
    type: 'link',
    title: 'Auctions',
    icon: <PieChart className="h-4 w-4" />,
    href: '/auctions',
  },
  {
    type: 'link',
    title: 'Orders',
    icon: <Package2 className="h-4 w-4" />,
    href: '/orders',
  },
  {
    type: 'link',
    title: 'Settings',
    href: '/settings',
    icon: <SettingsIcon className="h-4 w-4" />,
  },
];

export const userMenuLinks = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <DashboardIcon className="h-4 w-4" />,
    desktopOnly: true,
  },
  {
    label: 'Settings',
    href: '#',
    icon: <SettingsIcon className="h-4 w-4" />,
    desktopOnly: false,
  },
] as const;
