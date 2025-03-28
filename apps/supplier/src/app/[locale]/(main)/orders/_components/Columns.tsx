'use client';

import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader, renderStatus } from '@mono/ui';
import { cn } from '@mono/util';
import Image from 'next/image';
import { Order } from '../../../../../validation/order-schema';
import { OrderRowActions } from './Actions';

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
    cell: ({ row }) => (
      <div className="flex justify-center">
        {renderStatus(row.getValue('status'))}
      </div>
    ),
    filterFn: (row, id, value) => value === row.getValue(id),
  },

  {
    id: 'actions',
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => <OrderRowActions row={row} />,
  },
];
