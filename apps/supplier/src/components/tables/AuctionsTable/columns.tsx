'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge, DataTableColumnHeader } from '@mono/ui';
import { format } from 'date-fns';
import Image from 'next/image';
import { Auction } from '../../../validation/auction-schema';
import { AuctionRowActions } from './AuctionRowActions';

function renderAuctionStatus(status: Auction['status']) {
  switch (status) {
    case 'rejected':
      return <Badge variant="destructive">Active</Badge>;
    case 'placed':
      return <Badge variant="info">In Review</Badge>;
    case 'pending':
      return <Badge variant="warning">Pending</Badge>;
    default:
      return null;
  }
}

export const columns: ColumnDef<Auction>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-x-4">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src="/placeholder.svg"
            width="64"
          />
          <span className="max-w-80 truncate font-medium">
            {row.getValue('name')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return format(new Date(row.original.date), 'yyyy/MM/dd');
    },
    filterFn: (row, id, value) => value === row.getValue(id),
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
    cell: ({ row }) => {
      return (
        <span>{`${row.original.quantity.min} - ${row.original.quantity.max}`}</span>
      );
    },
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => {
      return (
        <span>{`${row.original.price.min}$ - ${row.original.price.max}$`}</span>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status"
        className="justify-center"
      />
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        {renderAuctionStatus(row.getValue('status'))}
      </div>
    ),
    filterFn: (row, id, value) => value === row.getValue(id),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <AuctionRowActions row={row} />,
  },
];
