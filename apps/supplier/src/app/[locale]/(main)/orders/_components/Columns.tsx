'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge, DataTableColumnHeader } from '@mono/ui';
import { cn } from '@mono/util';
import Image from 'next/image';
import { Order } from '../../../../../validation/order-schema';
import { OrderRowActions } from './Actions';

function renderStatus(status: Order['status']) {
  switch (status) {
    case 'active':
      return <Badge variant="success">Active</Badge>;
    case 'in_review':
      return <Badge variant="info">In Review</Badge>;
    case 'pending':
      return <Badge variant="warning">Pending</Badge>;
    case 'delivered':
      return <Badge variant="elevated">Delivered</Badge>;
    default:
      return null;
  }
}

export const columns: ColumnDef<Order>[] = [
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
    filterFn: (row, id, value) => value === row.getValue(id),
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      return (
        <span
          className={cn({
            'text-destructive': row.getValue('quantity') === 0,
          })}
        >
          {row.getValue('quantity')} in stock
        </span>
      );
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => {
      return <span>${Number(row.getValue('price')).toFixed(2)}</span>;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => renderStatus(row.getValue('status')),
    filterFn: (row, id, value) => value === row.getValue(id),
  },

  {
    id: 'actions',
    cell: ({ row }) => <OrderRowActions row={row} />,
  },
];
