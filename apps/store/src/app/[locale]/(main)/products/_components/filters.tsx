'use client';

import { FilterOption, GlobalFilterOption } from '@mono/ui';
import { statuses } from '../_data/Data';
import { type Product } from '../_data/schema';

export const itemsFilters: FilterOption<Product>[] = [];

export const globalFilter: GlobalFilterOption<Product> = {
  column: 'status',
  options: statuses,
};
