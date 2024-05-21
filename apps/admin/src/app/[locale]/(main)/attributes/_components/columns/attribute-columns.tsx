import { ColumnType } from 'rc-table';
import { TypedAttributeListing } from '../../../../../../types/attribute';
import routesConfig from '../../../../../../config/routesConfig';
import ColumnID from '../../../../../../components/common/columns/ColumnID';
import Badge from '../../../../../../components/ui/Badge';
import { BaseDataItem } from '../../../../../../types/common';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnDelete from '../../../../../../components/table-columns/ColumnDelete';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';

const attributeColumns: ColumnType<TypedAttributeListing>[] = [
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
              <Badge key={value.id} variant="simple">
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
    title: 'Actions',
    render(_, record) {
      return (
        <ColumnActionWrapper>
          <ColumnEdit href={routesConfig.editAttribute(record.id)} />
          <ColumnDelete id={record.id} />
        </ColumnActionWrapper>
      );
    },
  },
];

export default attributeColumns;
