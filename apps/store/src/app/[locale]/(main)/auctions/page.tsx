'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';
import { z } from 'zod';
import SearchBar from '../../../../components/SearchBar';
import { CategoryFilterOption } from '../../../../components/filters/CategoryFilter';
import { SubFilter } from '../../../../components/filters/SubFilters';
import Filters, { Filter } from './_components/Filters';
import ToolBar from './_components/ToolBar';

const CATEGORIES_OPTIONS: CategoryFilterOption[] = [
  { label: 'Pending', value: 'pending' },
  { label: 'On Auction', value: 'on_auction' },
  { label: 'Has offers', value: 'has_offer' },
  { label: 'Canceled', value: 'canceled' },
];

const SUB_FILTERS: SubFilter[] = [
  {
    label: 'Filter',
    name: 'filter',
    options: [
      { label: 'Under $50', value: 'under-50' },
      { label: 'Between $50 and $100', value: 'between-50-100' },
      { label: 'Over $100', value: 'over-100' },
    ],
  },
];

const filtersSchema = z.object({
  category: z.string().optional(),
  filter: z.string().optional(),
  price: z.array(z.coerce.number().positive()).length(2).optional(),
});

const DEFAULT_PRICE_FILTER = [0, 1000] satisfies [number, number];
const DEFAULT_QUANTITY_FILTER = [0, 10000] satisfies [number, number];

const filters: Filter[] = [
  {
    type: 'range',
    name: 'price',
    defaultValue: DEFAULT_PRICE_FILTER,
    label: 'Price',
    defaultOpen: true,
  },
  {
    type: 'range',
    name: 'quantity',
    defaultValue: DEFAULT_QUANTITY_FILTER,
    label: 'Quantity',
    defaultOpen: true,
    step: 5,
  },
  {
    type: 'checkbox',
    name: 'category',
    label: 'Category',
    defaultOpen: true,
    options: [
      { label: 'Art', value: 'art' },
      { label: 'Collectibles', value: 'collectibles' },
      { label: 'Electronics', value: 'electronics' },
      { label: 'Fashion', value: 'fashion' },
      { label: 'Home & Garden', value: 'home_garden' },
      { label: 'Motors', value: 'motors' },
    ],
  },
  {
    type: 'radio',
    name: 'type',
    label: 'Type',
    options: [
      {
        label: 'alger',
        value: 'alger',
      },
      {
        label: 'Blida',
        value: 'blida',
      },
    ],
  },
];

const Auctions = () => {
  const searchParams = useSearchParams();
  const { data: filterValues } = filtersSchema.safeParse(searchParams);
  const price = filterValues?.price || DEFAULT_PRICE_FILTER;

  return (
    <Card className="bg-transparent shadow-none">
      <CardHeader>
        <div className="flex flex-wrap justify-between gap-4">
          <CardTitle>My Auctions</CardTitle>
          <SearchBar />
        </div>
        <CardDescription>Follow your auctions and offers.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ToolBar
          categoryFilters={CATEGORIES_OPTIONS}
          subFilters={SUB_FILTERS}
        />
        {/* sidebar and main content to show auctions */}
        <section className="flex flex-col gap-8 md:flex-row">
          {/* filters sidebar */}
          <Card className="w-full divide-y md:w-1/4">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="flex w-full flex-col gap-4 ">
              <Filters filters={filters} />
            </CardContent>
          </Card>
        </section>
      </CardContent>
    </Card>
  );
};

export default memo(Auctions);
