import { DashboardIcon } from '@radix-ui/react-icons';
import { Package, Package2, PieChart, SettingsIcon } from 'lucide-react';
import { NavigationItem } from './components/navbar/NavMenu';

export const NavItems: NavigationItem[] = [
  {
    type: 'link',
    title: 'Dashboard',
    href: '#',
    icon: <DashboardIcon className="h-4 w-4" />,
  },
  {
    type: 'menu',
    title: 'Products',
    icon: <Package className="h-4 w-4" />,
    children: [
      {
        title: 'All Products',
        href: '#',
      },
      {
        title: 'Add Product',
        href: '#',
      },
    ],
  },
  {
    type: 'menu',
    title: 'Auctions',
    icon: <PieChart className="h-4 w-4" />,
    children: [
      {
        title: 'All Auctions',
        href: '#',
      },
      {
        title: 'Add Auction',
        href: '#',
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
      },
      {
        title: 'Add Order',
        href: '#',
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
