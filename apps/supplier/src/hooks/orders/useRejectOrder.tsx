'use client';

import { useQueryClient } from '@tanstack/react-query';
import { Order } from '../../validation/order-schema';
import { useAuthMutation } from '../useAuthQuery';

export function useRejectOrder(orderId: string | number) {
  const queryClient = useQueryClient();
  return useAuthMutation(
    ['rejectOrder', orderId],
    async () => {
      // reject the order
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },

    {
      onError: (err) => {
        console.error('Failed to reject the order', err);
      },

      onSuccess: () => {
        // update the order status
        const previousOrders = queryClient.getQueryData<Order[]>(['orders']);
        queryClient.setQueryData<Order[]>(
          ['orders'],
          previousOrders?.filter((o) => o.id !== orderId),
        );

        // update the order
        const previousOrder = queryClient.getQueryData<Order>([
          'order',
          orderId,
        ]);
        queryClient.setQueryData<Order>(['order', orderId], undefined);
      },
    },
  );
}
