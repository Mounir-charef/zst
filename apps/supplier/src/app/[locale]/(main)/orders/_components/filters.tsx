'use client';

import { GlobalFilterOption } from '@mono/ui';
import { Order } from '../../../../../validation/order-schema';
import { statuses } from '../_data/Data';

export const globalFilter: GlobalFilterOption<Order> = {
  column: 'status',
  options: statuses,
};
