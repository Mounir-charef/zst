'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Order } from '../../validation/order-schema';

export function useDeliverOrder(orderId: string | number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deliverOrder', orderId],
    mutationFn: async (adminNote: string) => {
      // Accept the order
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return adminNote;
    },
    onSuccess: (adminNote) => {
      // update the order status
      const previousOrders = queryClient.getQueryData<Order[]>(['orders']);
      queryClient.setQueryData<Order[]>(
        ['orders'],
        previousOrders?.map((o) => {
          if (o.id === orderId) {
            return { ...o, status: 'delivered' };
          }
          return o;
        }),
      );

      // update the order
      const previousOrder = queryClient.getQueryData<Order>(['order', orderId]);
      queryClient.setQueryData<Order>(['order', orderId], {
        ...previousOrder!,
        status: 'delivered',
      });

      toast.success('Order delivered successfully:' + adminNote);
    },
  });
}
