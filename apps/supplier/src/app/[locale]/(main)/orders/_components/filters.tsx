'use client';

import { GlobalFilterOption } from '@mono/ui';
import { Order } from '../_data/schema';
import { statuses } from '../_data/Data';

export const globalFilter: GlobalFilterOption<Order> = {
  column: 'status',
  options: statuses,
};
