import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '@mono/ui';
import ProductInfoCell from '../../../../../../components/products/ProductInfoCell';
import { TypedOfferListing } from '../../../../../../types/offer';

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
];

export default offerColumns;
