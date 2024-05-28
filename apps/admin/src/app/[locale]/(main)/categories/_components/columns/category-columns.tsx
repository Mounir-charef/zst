import { ColumnsType } from 'rc-table';
import { TypedCategoryListing } from '../../../../../../types/category';
import ColumnID from '../../../../../../components/common/columns/ColumnID';
import ColumnText from '../../../../../../components/common/columns/ColumnText';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';
import ColumnDelete from '../../../../../../components/table-columns/ColumnDelete';
import routesConfig from '../../../../../../config/routesConfig';
import CategoryColumnInfo from './CategoryColumnInfo';

const categoryColumns: ColumnsType<TypedCategoryListing> = [
  {
    title: 'ID',
    render(_, record) {
      return <ColumnID id={record.id} />;
    },
  },
  {
    title: 'Name',
    render(_, record) {
      return <CategoryColumnInfo name={record.name} image={record.image} />;
    },
  },
  {
    title: 'Parent',
    render(_, record) {
      return <ColumnText text={record.parent?.name || null} />;
    },
  },
  {
    title: 'Actions',
    render(_, record) {
      return (
        <ColumnActionWrapper>
          <ColumnEdit href={routesConfig.editCategory(record.id)} />
          <ColumnDelete id={record.id} />
        </ColumnActionWrapper>
      );
    },
  },
];

export default categoryColumns;
