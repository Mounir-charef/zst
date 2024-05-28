import { z } from 'zod';
import { Order, orderSchema } from '../../../validation/order-schema';
import orders from './orders.json';

export async function getOrders() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return z.array(orderSchema).parse(orders) as Order[];
}
