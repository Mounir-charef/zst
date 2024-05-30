import { TypedAttributeListing } from '../../../../../../types/attribute';
import routesConfig from '../../../../../../config/routesConfig';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnDelete from '../../../../../../components/table-columns/ColumnDelete';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';
import { ColumnDef } from '@tanstack/react-table';
import { Badge, DataTableColumnHeader } from '@mono/ui';
import AttributeColumnActions from './AttributeColumnActions';

// const attributeColumns: ColumnType<TypedAttributeListing>[] = [
//   {
//     title: 'ID',
//     render(_, record) {
//       return <ColumnID id={record.id} />;
//     },
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Values',
//     render(_, record) {
//       return (
//         <div className="flex flex-wrap gap-1.5">
//           {record.values.map((value) => {
//             return (
//               <Badge key={value.id} variant="simple">
//                 {value.value}
//               </Badge>
//             );
//           })}
//         </div>
//       );
//     },
//   },
//   {
//     title: 'Slug',
//     dataIndex: 'slug',
//   },
//   {
//     title: 'Actions',
//     render(_, record) {
//       return (
//         <ColumnActionWrapper>
//           <ColumnEdit href={routesConfig.editAttribute(record.id)} />
//           <ColumnDelete id={record.id} />
//         </ColumnActionWrapper>
//       );
//     },
//   },
// ];

const attributeColumns: ColumnDef<TypedAttributeListing>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row: { original } }) => {
      return <span>{original.name}</span>;
    },
  },

  {
    id: 'values',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Values" />;
    },
    cell: ({ row: { original } }) => {
      return (
        <div className="flex flex-wrap gap-1.5">
          {original.values.map((value) => {
            return (
              <Badge key={value.id} variant="outline">
                {value.value}
              </Badge>
            );
          })}
        </div>
      );
    },
  },

  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row: { original } }) => {
      return <AttributeColumnActions id={original.id} />;
    },
  },
];

export default attributeColumns;
