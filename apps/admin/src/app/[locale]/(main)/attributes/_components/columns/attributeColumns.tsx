import { ColumnType } from 'rc-table';
import { Attribute } from '../../../../../../types/attribute';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';

import { Link } from '../../../../../../navigation';
import routesConfig from '../../../../../../config/routesConfig';
import AttributeColumnDelete from './AttributeColumnDelete';
import ColumnID from '../../../../../../components/common/columns/ColumnID';
import Badge from '../../../../../../components/ui/Badge';

const attributeColumns: ColumnType<Attribute>[] = [
  {
    title: 'ID',
    render(_, record) {
      return <ColumnID id={record.id} />;
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Values',
    render(_, record) {
      return (
        <div className="flex flex-wrap gap-1.5">
          {record.values.map((value) => {
            return (
              <Badge
                key={value.id}
                variant="simple"
                // className="rounded bg-gray-200/50 px-2.5 py-1"
              >
                {value.value}
              </Badge>
            );
          })}
        </div>
      );
    },
  },
  {
    title: 'Slug',
    dataIndex: 'slug',
  },
  {
    title: 'Slug',
    render(_, record) {
      return (
        <div className="flex items-center gap-2">
          <Link href={routesConfig.editAttribute(record.id)}>
            <FiEdit className="text-base-color" />
          </Link>
          <AttributeColumnDelete id={record.id} />
        </div>
      );
    },
  },
];

export default attributeColumns;
