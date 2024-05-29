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
} from '@mono/ui';
import { memo, useCallback } from 'react';
import { useAcceptOrder } from '../../../../../hooks/orders/useAcceptOrder';

interface AcceptOrderButtonProps {
  orderId: string | number;
  children: React.ReactNode;
}

const AcceptOrderButton = ({ orderId, children }: AcceptOrderButtonProps) => {
  const { mutate: accept, isPending } = useAcceptOrder(orderId);

  const handleAccept = useCallback(() => {
    accept();
  }, [accept]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild disabled={isPending}>
        {children}
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
          <AlertDialogAction onClick={handleAccept}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default memo(AcceptOrderButton);
