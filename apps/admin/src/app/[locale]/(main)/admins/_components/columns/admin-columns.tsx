import { ColumnsType } from 'rc-table';
import { TypedAdmin } from '../../../../../../types/user';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnView from '../../../../../../components/table-columns/ColumnView';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';
import ColumnText from '../../../../../../components/common/columns/ColumnText';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '@mono/ui';

// const adminColumns: ColumnsType<TypedAdmin> = [
//   {
//     title: 'Username',
//     render(_, record) {
//       return <ColumnText text={record.username} />;
//     },
//   },
//   {
//     title: 'Email',
//     render(_, record) {
//       return <ColumnText text={record.email} />;
//     },
//   },
//   {
//     title: 'Phone',
//     render(_, record) {
//       return <ColumnText text={record.phoneNumber} />;
//     },
//   },
//   {
//     title: 'Actions',
//     render(_, record) {
//       return (
//         <ColumnActionWrapper>
//           <ColumnView href="#" />
//           <ColumnEdit href="#" />
//         </ColumnActionWrapper>
//       );
//     },
//   },
// ];

const adminColumns: ColumnDef<TypedAdmin>[] = [
  {
    accessorKey: 'username',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Username" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.username}</span>;
    },
  },

  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.email}</span>;
    },
  },

  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.phoneNumber}</span>;
    },
  },

  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row: { original } }) => {
      return (
        <ColumnActionWrapper>
          <ColumnView href="#" />
          <ColumnEdit href="#" />
        </ColumnActionWrapper>
      );
    },
  },
];

export default adminColumns;
