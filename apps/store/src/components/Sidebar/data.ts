import {
  Hotel,
  BookOpen,
  Image,
  Newspaper,
  PieChart,
  Hammer,
  Cog,
  Brush,
  Laptop2,
  Users,
  Compass,
  Umbrella,
  Home,
  Plane,
  CarFront,
  Ship,
  Calendar,
  Ticket,
  MessageCircle,
  List,
  Box,
  LayoutGrid,
  CreditCard,
  Shirt,
} from 'lucide-react';

import { LucideIcon } from 'lucide-react';

export interface TLink {
  id: number;
  href: string;
  title: string;
  Icon?: LucideIcon | null;
  segment?: string;
  children?: TLink[];
}

interface TLinks {
  [property: string]: {
    title: string;
    links: TLink[];
  };
}

const links: TLinks = {
  dashboardLinks: {
    title: '',
    links: [
      {
        id: 2,
        title: 'Women Dress',
        Icon: Shirt,
        href: '#',
        children: [
          {
            id: 1,
            title: 'Printed',
            href: '#',
          },
          {
            id: 2,
            title: 'Floral',
            href: '#',
          },
          {
            id: 2,
            title: 'Single Color',
            href: '#',
          },
        ],
      },
    ],
  },
};

export default links;
