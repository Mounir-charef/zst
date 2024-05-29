import { ColumnsType } from 'rc-table';
import { TypedCategoryListing } from '../../../../../../types/category';
import ColumnID from '../../../../../../components/common/columns/ColumnID';
import ColumnText from '../../../../../../components/common/columns/ColumnText';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';
import ColumnDelete from '../../../../../../components/table-columns/ColumnDelete';
import routesConfig from '../../../../../../config/routesConfig';
import CategoryColumnInfo from './CategoryColumnInfo';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '@mono/ui';
import Image from 'next/image';
import CategoryColumnActions from './CategoryColumnActions';

// const categoryColumns: ColumnsType<TypedCategoryListing> = [
//   {
//     title: 'ID',
//     render(_, record) {
//       return <ColumnID id={record.id} />;
//     },
//   },
//   {
//     title: 'Name',
//     render(_, record) {
//       return <CategoryColumnInfo name={record.name} image={record.image} />;
//     },
//   },
//   {
//     title: 'Parent',
//     render(_, record) {
//       return <ColumnText text={record.parent?.name || null} />;
//     },
//   },
//   {
//     title: 'Actions',
//     render(_, record) {
//       return (
//         <ColumnActionWrapper>
//           <ColumnEdit href={routesConfig.editCategory(record.id)} />
//           <ColumnDelete id={record.id} />
//         </ColumnActionWrapper>
//       );
//     },
//   },
// ];

const categoryColumns: ColumnDef<TypedCategoryListing>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row: { original } }) => {
      return (
        <div className="flex items-center gap-x-4">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src={original.image?.path}
            width="64"
          />
          <span className="max-w-80 truncate font-medium">{original.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'parent',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parent" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.parent?.name}</span>;
    },
    // filterFn: (row, id, value) => value === row.getValue(id),
  },

  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row: { original } }) => {
      return <CategoryColumnActions id={original.id} />;
    },
  },
];

export default categoryColumns;
