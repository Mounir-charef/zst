import { ColumnType } from 'rc-table';
import { TypedProductListing } from '../../../../../../types/product';
import ColumnView from '../../../../../../components/table-columns/ColumnView';
import routesConfig from '../../../../../../config/routesConfig';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnDelete from '../../../../../../components/table-columns/ColumnDelete';
import { ColumnDef } from '@tanstack/react-table';
import {
  Badge,
  Checkbox,
  DataTableColumnHeader,
  DropdownMenuItem,
} from '@mono/ui';
import Image from 'next/image';
import { cn } from '@mono/util';
import StatusBadge from '../../../../../../components/common/StatusBadge';
import ProductColumnActions from './ProductColumnActions';
import ProductInfoCell from '../../../../../../components/products/ProductInfoCell';

// const productColumns: ColumnType<TypedProductListing>[] = [
//   {
//     title: 'ID',
//     render(_, record) {
//       return <ColumnID id={record.id} />;
//     },
//   },
//   {
//     title: 'Product',
//     render(_, record) {
//       return <ProductColumnInfo {...record} />;
//     },
//   },

//   {
//     title: 'Product Type',
//     render(_, record) {
//       return <ColumnText text={record.type} />;
//     },
//   },

//   {
//     title: 'Price',
//     render(_, record) {
//       return <ColumnText text={`$${record.price}`} />;
//     },
//   },

//   {
//     title: 'Quantity',
//     render(_, record) {
//       return <ColumnText text={record.qty} />;
//     },
//   },
//   {
//     title: 'Status',
//     render() {
//       return <Badge>Publish</Badge>;
//     },
//   },
//   {
//     title: 'Actions',
//     render(_, record) {
//       return (
//         <ColumnActionWrapper>
//           <ColumnEdit href={routesConfig.editProduct(record.id)} />
//           <ColumnView href={routesConfig.editProduct(record.id)} />
//           <ColumnDelete id={record.id} />
//         </ColumnActionWrapper>
//       );
//     },
//   },
// ];

export const productColumns: ColumnDef<TypedProductListing>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row: { original } }) => {
      return <ProductInfoCell product={original} />;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row: { original } }) => {
      return <StatusBadge status={original.status} />;
    },
    filterFn: (row, id, value) => value === row.getValue(id),
  },

  {
    accessorKey: 'price',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row: { original } }) => {
      return <span>${Number(original.price).toFixed(2)}</span>;
    },
  },

  {
    accessorKey: 'stock',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stock" />
    ),
    cell: ({ row: { original } }) => {
      return (
        <span
          className={cn({
            'text-destructive': original.qty === 0,
          })}
        >
          {original.qty} in stock
        </span>
      );
    },
  },

  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row: { original } }) => {
      return <ProductColumnActions id={original.id} />;
    },
  },
];

export default productColumns;
