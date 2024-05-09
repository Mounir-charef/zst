import { ColumnType } from 'rc-table';
import { ProductListing } from '../../../../../../types/product';
import ColumnID from '../../../../../../components/common/columns/ColumnID';
import ProductColumnInfo from './ProductColumnInfo';
import ColumnText from '../../../../../../components/common/columns/ColumnText';
import Badge from '../../../../../../components/ui/Badge';
import { Link } from '../../../../../../navigation';
import { FiEdit, FiEye } from 'react-icons/fi';
import AttributeColumnDelete from '../../../attributes/_components/columns/AttributeColumnDelete';

const productColumns: ColumnType<ProductListing>[] = [
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
        <div className="flex items-center gap-2">
          <Link href={'#'}>
            <FiEdit />
          </Link>
          <Link href={'#'}>
            <FiEye />
          </Link>
          <AttributeColumnDelete id={record.id} />
        </div>
      );
    },
  },
];

export default productColumns;
