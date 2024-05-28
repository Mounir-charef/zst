import { CircleIcon } from '@radix-ui/react-icons';
import orders from './orders.json';
import { z } from 'zod';
import { Order, orderSchema } from '../../../../../validation/order-schema';

export const statuses = [
  {
    label: 'Active',
    value: 'active',
    icon: CircleIcon,
  },
  {
    label: 'In review',
    value: 'in_review',
    icon: CircleIcon,
  },
  {
    label: 'Pending',
    value: 'pending',
    icon: CircleIcon,
  },
  {
    label: 'Delivered',
    value: 'delivered',
    icon: CircleIcon,
  },
];

export async function getOrders() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return z.array(orderSchema).parse(orders) as Order[];
}
