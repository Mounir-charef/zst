import Table, { TableProps } from 'rc-table';
import Pagination, { PaginationProps } from './pagination/Pagination';

interface DataTableProps extends TableProps {
  pagination?: PaginationProps | undefined;
}

const DataTable = ({ pagination, ...props }: DataTableProps) => {
  return (
    <>
      <Table {...props} />
      {pagination && <Pagination {...pagination} />}
    </>
  );
};

export default DataTable;
