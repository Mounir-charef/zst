'use client';

import { useQueryClient } from '@tanstack/react-query';
import { Order } from '../../validation/order-schema';
import { useAuthMutation } from '../useAuthQuery';

export function useAcceptOrder(orderId: string | number) {
  const queryClient = useQueryClient();
  return useAuthMutation(
    ['acceptOrder', orderId],
    async () => {
      // Accept the order
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },

    {
      onError: (err) => {
        console.error('Failed to accept the order', err);
      },

      onSuccess: () => {
        // update the order status
        const previousOrders = queryClient.getQueryData<Order[]>(['orders']);
        queryClient.setQueryData<Order[]>(
          ['orders'],
          previousOrders?.map((o) => {
            if (o.id === orderId) {
              return { ...o, status: 'pending' };
            }
            return o;
          }),
        );
      },
    },
  );
}
