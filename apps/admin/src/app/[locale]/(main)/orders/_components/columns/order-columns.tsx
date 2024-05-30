import { ColumnDef } from '@tanstack/react-table';
import { TypedOrderListing } from '../../../../../../types/order';
import { Badge, DataTableColumnHeader } from '@mono/ui';
import Image from 'next/image';
import ProductInfoCell from '../../../../../../components/products/ProductInfoCell';
import OrderColumnActions from './OrderColumnActions';
import { orderStatues } from '../../../../../../data/orders';

const orderColumns: ColumnDef<TypedOrderListing>[] = [
  {
    id: 'product',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row: { original } }) => {
      return <ProductInfoCell product={original.product} />;
    },
  },

  {
    id: 'date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.date}</span>;
    },
  },

  {
    id: 'qty',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.quantity}</span>;
    },
  },

  {
    id: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.price}</span>;
    },
  },

  {
    id: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row: { original } }) => {
      return (
        <Badge
          variant={
            orderStatues[original.status as keyof typeof orderStatues]
              .variant as 'default'
          }
        >
          {orderStatues[original.status as keyof typeof orderStatues].text}
        </Badge>
      );
    },
  },

  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row: { original } }) => {
      return <OrderColumnActions status={original.status} id={original.id} />;
    },
  },
];

export default orderColumns;
