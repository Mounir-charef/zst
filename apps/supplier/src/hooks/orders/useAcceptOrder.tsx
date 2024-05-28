'use client';

import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
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
      onSuccess: () => {
        // update the order status
        const previousOrders = queryClient.getQueryData<Order[]>(['orders']);
        queryClient.setQueryData<Order[]>(
          ['orders'],
          previousOrders?.map((o) => {
            if (o.id === orderId) {
              return { ...o, status: 'active' };
            }
            return o;
          }),
        );

        // update the order
        const previousOrder = queryClient.getQueryData<Order>([
          'order',
          orderId,
        ]);
        queryClient.setQueryData<Order>(['order', orderId], {
          ...previousOrder!,
          status: 'active',
        });

        toast.success('Order accepted successfully');
      },
    },
  );
}
