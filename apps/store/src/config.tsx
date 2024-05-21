import { DashboardIcon } from '@radix-ui/react-icons';
import { Package, Package2, PieChart, SettingsIcon } from 'lucide-react';
import { NavigationItem } from './components/navbar/NavMenu';

export const NavItems: NavigationItem[] = [
  {
    type: 'link',
    title: 'Dashboard',
    href: '/',
    icon: <DashboardIcon className="h-4 w-4" />,
  },
  {
    type: 'link',
    title: 'Products',
    icon: <Package className="h-4 w-4" />,
    href: '/products',
  },
  {
    type: 'menu',
    title: 'Auctions',
    icon: <PieChart className="h-4 w-4" />,
    children: [
      {
        title: 'All Auctions',
        href: '#',
        description: 'View all auctions',
      },
      {
        title: 'Add Auction',
        href: '#',
        description: 'Add a new auction',
      },
    ],
  },
  {
    type: 'menu',
    title: 'Orders',
    icon: <Package2 className="h-4 w-4" />,
    children: [
      {
        title: 'All Orders',
        href: '#',
        description: 'View all orders',
      },
      {
        title: 'Add Order',
        href: '#',
        description: 'Add a new order',
      },
    ],
  },
  {
    type: 'link',
    title: 'Settings',
    href: '#',
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
