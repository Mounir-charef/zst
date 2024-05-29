import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '@mono/ui';
import ProductInfoCell from '../../../../../../components/products/ProductInfoCell';
import { TypedOfferListing } from '../../../../../../types/offer';
import OfferColumnActions from './OfferColumnActions';

const offerColumns: ColumnDef<TypedOfferListing>[] = [
  {
    // accessorKey: 'product',
    id: 'product',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row: { original } }) => {
      return <ProductInfoCell product={original.product} />;
    },
  },

  {
    // accessorKey: 'product',
    id: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row: { original } }) => {
      return (
        <span>
          ${original.minPrice} - ${original.maxPrice}
        </span>
      );
    },
  },

  {
    // accessorKey: 'product',
    id: 'quantity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row: { original } }) => {
      return (
        <span>
          {original.minQuantity} - {original.maxQuantity}
        </span>
      );
    },
  },

  {
    // accessorKey: 'product',
    id: 'variations',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Variations" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.variations}</span>;
    },
  },

  {
    // accessorKey: 'product',
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row: { original } }) => {
      return <OfferColumnActions id={original.id} />;
    },
  },
];

export default offerColumns;
