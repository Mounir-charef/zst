'use client';

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
import { memo, useCallback, useEffect } from 'react';
import { useRejectOrder } from '../../../../../hooks/orders/useRejectOrder';
import { useOrderContext } from './OrderProvider';

interface AcceptOrderButtonProps {
  orderId: string | number;
  children: React.ReactNode;
}

const AcceptOrderButton = ({ orderId, children }: AcceptOrderButtonProps) => {
  const { mutate: reject, isPending, status } = useRejectOrder(orderId);
  const { setSelectedOrder } = useOrderContext();

  const handleReject = useCallback(() => {
    reject();
  }, [reject]);

  useEffect(() => {
    if (status === 'success') {
      setSelectedOrder(null);
    }
  }, [status]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild disabled={isPending}>
        {children}
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
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            <Button variant="destructive">Delete</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default memo(AcceptOrderButton);
