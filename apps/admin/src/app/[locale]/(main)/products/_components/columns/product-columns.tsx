import { ColumnType } from 'rc-table';
import { TypedProductListing } from '../../../../../../types/product';
import ColumnID from '../../../../../../components/common/columns/ColumnID';
import ProductColumnInfo from './ProductColumnInfo';
import ColumnText from '../../../../../../components/common/columns/ColumnText';
import Badge from '../../../../../../components/ui/Badge';
import { BaseDataItem } from '../../../../../../types/common';
import ColumnView from '../../../../../../components/table-columns/ColumnView';
import routesConfig from '../../../../../../config/routesConfig';
import ColumnEdit from '../../../../../../components/table-columns/ColumnEdit';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import ColumnDelete from '../../../../../../components/table-columns/ColumnDelete';

const productColumns: ColumnType<TypedProductListing & BaseDataItem>[] = [
  {
    title: 'ID',
    render(_, record) {
      return <ColumnID id={record.id} />;
    },
  },
  {
    title: 'Product',
    render(_, record) {
      return <ProductColumnInfo {...record} />;
    },
  },

  {
    title: 'Product Type',
    render(_, record) {
      return <ColumnText text={record.type} />;
    },
  },

  {
    title: 'Price',
    render(_, record) {
      return <ColumnText text={`$${record.price}`} />;
    },
  },

  {
    title: 'Quantity',
    render(_, record) {
      return <ColumnText text={record.qty} />;
    },
  },
  {
    title: 'Status',
    render() {
      return <Badge>Publish</Badge>;
    },
  },
  {
    title: 'Actions',
    render(_, record) {
      return (
        <ColumnActionWrapper>
          <ColumnEdit href={routesConfig.editProduct(record.id)} />
          <ColumnView href={routesConfig.editProduct(record.id)} />
          <ColumnDelete id={record.id} />
        </ColumnActionWrapper>
      );
    },
  },
];

export default productColumns;
