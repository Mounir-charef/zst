'use client';

import { filterOption } from '@mono/ui';
import { ids, priorities, statuses } from './_data/Data';
import { Task } from './_data/schema';

export const filterOptions: filterOption<Task>[] = [
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
