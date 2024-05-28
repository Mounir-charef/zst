'use client';

import { Row } from '@tanstack/react-table';

import { Button } from '@mono/ui';
import { CheckIcon, XIcon } from 'lucide-react';
import { Order, orderSchema } from '../../../../../validation/order-schema';
import AcceptOrderButton from './AcceptOrderButton';
import RejectOrderButton from './RejectOrderButton';

interface OrderRowActionsProps {
  row: Row<Order>;
}

export function OrderRowActions({ row }: OrderRowActionsProps) {
  const { id, status } = orderSchema.parse(row.original);

  if (status !== 'in_review') return;

  return (
    <div className="flex items-center gap-2">
      <AcceptOrderButton orderId={id}>
        <Button className="h-7 gap-2" variant="success">
          <CheckIcon className="h-4 w-4" /> Accept
        </Button>
      </AcceptOrderButton>

      <RejectOrderButton orderId={id}>
        <Button className="h-7" size="icon" variant="outline">
          <XIcon className="text-destructive h-4 w-4" />
        </Button>
      </RejectOrderButton>
    </div>
  );
}
