'use client';

import { FilterOption, GlobalFilterOption } from '@mono/ui';
import { statuses } from '../_data/Data';
import { type Product } from '../../../../../validation/product-schema';

export const itemsFilters: FilterOption<Product>[] = [
  // {
  //   column: 'price',
  //   title: 'Price',
  //   options: [
  //     { label: 'All', value: 'all' },
  //     { label: 'Under $50', value: 'under-50' },
  //     { label: 'Between $50 and $100', value: 'between-50-100' },
  //     { label: 'Over $100', value: 'over-100' },
  //   ],
  // },
];

export const globalFilter: GlobalFilterOption<Product> = {
  column: 'status',
  options: statuses,
};
