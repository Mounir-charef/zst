import orders from './orders.json';
import type { Order } from '../../../validation/order-schema';

export async function getOrder(id: string | number): Promise<Order> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return orders.find((order) => order.id === id) as Order;
}
