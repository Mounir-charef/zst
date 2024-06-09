'use client';

import { Row } from '@tanstack/react-table';

import { Button } from '@mono/ui';
import { useMemo } from 'react';
import { Auction, auctionSchema } from '../../../validation/auction-schema';

interface AuctionRowActionsProps {
  row: Row<Auction>;
}

export function AuctionRowActions({ row }: AuctionRowActionsProps) {
  const { id, status } = auctionSchema.parse(row.original);

  const isPending = useMemo(() => row.original.status === 'pending', [row]);

  return (
    <div
      className="flex items-center gap-2"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Button variant="secondary">Details</Button>
      {isPending ? (
        <Button variant="success">Place Offer</Button>
      ) : (
        <Button variant="secondary" disabled>
          Place Offer
        </Button>
      )}
    </div>
  );
}
