'use client';

import { FilterOption, GlobalFilterOption } from '@mono/ui';
import { ids, priorities, statuses } from '../_data/Data';
import { Task } from '../_data/schema';

export const filterOptions: FilterOption<Task>[] = [
  {
    column: 'status',
    title: 'Status',
    options: statuses,
  },
  {
    column: 'priority',
    title: 'Priority',
    options: priorities,
  },
  {
    column: 'id',
    title: 'Id',
    options: ids,
  },
];
export const itemsFilters: FilterOption<Task>[] = [
  {
    column: 'priority',
    title: 'Priority',
    options: priorities,
  },
  {
    column: 'id',
    title: 'Id',
    options: ids,
  },
];

export const globalFilter: GlobalFilterOption<Task> = {
  column: 'status',
  options: statuses,
};
