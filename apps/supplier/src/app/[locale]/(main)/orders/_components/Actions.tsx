'use client';

import { Row } from '@tanstack/react-table';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@mono/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CheckIcon, XIcon } from 'lucide-react';
import { useCallback } from 'react';
import { toast } from 'sonner';
import { Order, orderSchema } from '../_data/schema';

interface OrderRowActionsProps {
  row: Row<Order>;
}

export function OrderRowActions({ row }: OrderRowActionsProps) {
  const order = orderSchema.parse(row.original);
  const queryClient = useQueryClient();
  const { mutate: accept, isPending: isAccepting } = useMutation({
    mutationKey: ['acceptOrder', order.id],
    mutationFn: async () => {
      // Accept the order
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    onError: (err) => {
      toast.error('Failed to accept the order' + err.message);
    },
    onSuccess: () => {
      toast.success('Order accepted successfully');
      // update the order status
      const previousOrders = queryClient.getQueryData<Order[]>(['orders']);
      queryClient.setQueryData<Order[]>(
        ['orders'],
        previousOrders?.map((o) => {
          if (o.id === order.id) {
            return { ...o, status: 'pending' };
          }
          return o;
        }),
      );
    },
  });

  const { mutate: reject, isPending: isRejecting } = useMutation({
    mutationKey: ['rejectOrder', order.id],
    mutationFn: async () => {
      // Reject the order
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    onError: (err) => {
      toast.error('Failed to reject the order' + err.message);
    },
    onSuccess: () => {
      toast.success('Order rejected successfully');
      // update the order status
      const previousOrders = queryClient.getQueryData<Order[]>(['orders']);
      queryClient.setQueryData<Order[]>(
        ['orders'],
        previousOrders?.map((o) => {
          if (o.id === order.id) {
            return { ...o, status: 'delivered' };
          }
          return o;
        }),
      );
    },
  });

  const handleAccept = useCallback(() => {
    accept();
  }, [accept]);

  const handleReject = useCallback(() => {
    reject();
  }, [reject]);

  if (order.status !== 'in_review') return;

  return (
    <div className="flex items-center gap-2">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className="h-7 gap-2"
            variant="success"
            disabled={isAccepting}
          >
            <CheckIcon className="h-4 w-4" /> Accept
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently accept the
              order.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleAccept}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            className="size-7"
            size="icon"
            variant="outline"
            disabled={isRejecting}
          >
            <XIcon className="text-destructive h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              order.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              asChild
              onClick={handleReject}
              className="bg-destructive hover:bg-destructive/90"
            >
              <Button variant="destructive">Delete</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
