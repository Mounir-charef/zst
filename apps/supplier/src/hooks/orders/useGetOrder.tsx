'use client';

import { getOrder } from '../../lib/data/orders/getOrder';
import { useAuthQuery } from '../useAuthQuery';

export function useGetOrder(orderId: string | number | null) {
  return useAuthQuery(['order', orderId], () => getOrder(orderId as string), {
    enabled: !!orderId,
  });
}
