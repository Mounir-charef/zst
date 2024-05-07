import { ColumnType } from 'rc-table';
import { Attribute } from '../../../../../../types/attribute';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';

import { Link } from '../../../../../../navigation';
import routesConfig from '../../../../../../config/routesConfig';
import AttributeColumnDelete from './AttributeColumnDelete';

const attributeColumns: ColumnType<Attribute>[] = [
  {
    title: 'ID',
    render(_, record) {
      return <span>#ID: {record.id}</span>;
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
              <span
                key={value.id}
                className="rounded bg-gray-200/50 px-2.5 py-1"
              >
                {value.value}
              </span>
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
