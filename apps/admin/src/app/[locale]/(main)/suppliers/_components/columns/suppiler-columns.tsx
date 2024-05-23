import { ColumnsType } from 'rc-table';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';
import ColumnView from '../../../../../../components/table-columns/ColumnView';
import ColumnText from '../../../../../../components/common/columns/ColumnText';
import { TypedSupplier } from '../../../../../../types/user';

const supplierColumns: ColumnsType<TypedSupplier> = [
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

export default supplierColumns;
