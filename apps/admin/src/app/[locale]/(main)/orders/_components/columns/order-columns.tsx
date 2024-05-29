import { ColumnDef } from '@tanstack/react-table';
import { TypedOrderListing } from '../../../../../../types/order';
import { DataTableColumnHeader } from '@mono/ui';
import Image from 'next/image';
import ProductInfoCell from '../../../../../../components/products/ProductInfoCell';

const orderColumns: ColumnDef<TypedOrderListing>[] = [
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

export default orderColumns;
