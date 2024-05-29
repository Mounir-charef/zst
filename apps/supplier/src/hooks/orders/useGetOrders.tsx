'use client';

import { getOrders } from '../../lib/data/orders/getOrders';
import { useAuthQuery } from '../useAuthQuery';

export function useGetOrders() {
  return useAuthQuery(['orders'], getOrders);
}
