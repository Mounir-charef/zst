import { ColumnsType } from 'rc-table';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnView from '../../../../../../components/table-columns/ColumnView';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';
import ColumnText from '../../../../../../components/common/columns/ColumnText';
import { TypedClient } from '../../../../../../types/user';

const clientColumns: ColumnsType<TypedClient> = [
  {
    title: 'Username',
    render(_, record) {
      return <ColumnText text={record.username} />;
    },
  },
  {
    title: 'Email',
    render(_, record) {
      return <ColumnText text={record.email} />;
    },
  },
  {
    title: 'Phone',
    render(_, record) {
      return <ColumnText text={record.phoneNumber} />;
    },
  },
  {
    title: 'Actions',
    render(_, record) {
      return (
        <ColumnActionWrapper>
          <ColumnView href="#" />
          <ColumnEdit href="#" />
        </ColumnActionWrapper>
      );
    },
  },
];

export default clientColumns;
