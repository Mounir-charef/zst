'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge, DataTableColumnHeader } from '@mono/ui';
import Image from 'next/image';
import { statuses } from '../_data/Data';
import { Product } from '../_data/schema';
import { DataTableRowActions } from './Actions';
import { cn } from '@mono/util';

export const columns: ColumnDef<Product>[] = [
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
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status'),
      );

      if (!status) {
        return null;
      }

      return (
        <Badge variant={status.value === 'active' ? 'success' : 'outline'}>
          {status.label}
        </Badge>
      );
    },
    filterFn: (row, id, value) => value === row.getValue(id),
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
    accessorKey: 'stock',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stock" />
    ),
    cell: ({ row }) => {
      return (
        <span
          className={cn({
            'text-destructive': row.getValue('stock') === 0,
          })}
        >
          {row.getValue('stock')} in stock
        </span>
      );
    },
  },

  {
    accessorKey: 'created_at',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue('created_at')}</span>;
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
