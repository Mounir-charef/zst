import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '@mono/ui';
import ProductInfoCell from '../../../../../../components/products/ProductInfoCell';
import { TypedAuctionListing } from '../../../../../../types/auction';

const auctionColumns: ColumnDef<TypedAuctionListing>[] = [
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.description}</span>;
    },
  },
  {
    accessorKey: 'minPrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Min Price" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.minPrice}</span>;
    },
  },
  {
    accessorKey: 'maxPrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Max Price" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.maxPrice}</span>;
    },
  },

  {
    accessorKey: 'minQuantity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Min Quantity" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.minQuantity}</span>;
    },
  },

  {
    accessorKey: 'maxQuantity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Max Quantity" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.maxQuantity}</span>;
    },
  },
];

export default auctionColumns;
