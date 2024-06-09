'use client';

import { Row } from '@tanstack/react-table';

import { Button } from '@mono/ui';
import { useMemo } from 'react';
import { Auction, auctionSchema } from '../../../validation/auction-schema';

interface AuctionRowActionsProps {
  row: Row<Auction>;
}

export function AuctionRowActions({ row }: AuctionRowActionsProps) {
  const isPending = useMemo(() => row.original.status === 'pending', [row]);

  return (
    <div
      className="flex max-w-64 items-center gap-2"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Button className="flex-1" variant="secondary">
        Details
      </Button>
      {isPending ? (
        <Button className="flex-1" variant="success">
          Place Offer
        </Button>
      ) : (
        <Button className="flex-1" variant="secondary" disabled>
          Place Offer
        </Button>
      )}
    </div>
  );
}
