'use client';
import { Shirt } from 'lucide-react';
import { TLinks } from '../../../../components/ListingFiltersNavigation/types';

export const clothingLinks: TLinks = [
  {
    id: 1,
    title: 'Women Dress',
    Icon: Shirt,
    href: '?category=women-dress',
    segment: 'women-dress',

    children: [
      {
        id: 1,
        title: 'Printed',
        href: '?category=printed',
        segment: 'printed',
      },
      {
        id: 2,
        title: 'Floral',
        href: '?category=floral',
        segment: 'floral',
      },
      {
        id: 3,
        title: 'Single Color',
        href: '?category=single-color',
        segment: 'single-color',
      },
    ],
  },
  {
    id: 2,
    title: 'Men Clothes',
    Icon: Shirt,
    href: '?category=men-clothes',
    segment: 'men-clothes',

    children: [
      {
        id: 1,
        title: 'Men Printed',
        href: '?category=menprinted',
        segment: 'menprinted',
      },
      {
        id: 2,
        title: 'Men Floral',
        href: '?category=menfloral',
        segment: 'menfloral',
      },
      {
        id: 3,
        title: 'Men Single Color',
        href: '?category=Men single-color',
        segment: 'Men single-color',
      },
    ],
  },
];
