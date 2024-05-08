'use client';

import { ids, priorities, statuses } from './_data/Data';

export const filterOptions = [
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
