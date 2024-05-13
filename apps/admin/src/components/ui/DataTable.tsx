import Table, { TableProps } from 'rc-table';
import Pagination, { PaginationProps } from './pagination/Pagination';
import { FaInfoCircle } from 'react-icons/fa';

interface DataTableProps extends TableProps {
  pagination?: PaginationProps | undefined;
}

const DataTableEmpty = () => {
  return (
    <div className="bg-background flex flex-col items-center gap-4 p-8">
      <FaInfoCircle size={60} className="text-primary" />
      <h2>No data available in table</h2>
    </div>
  );
};

const DataTable = ({ pagination, ...props }: DataTableProps) => {
  return (
    <>
      <Table emptyText={<DataTableEmpty />} {...props} />
      {pagination && <Pagination {...pagination} />}
    </>
  );
};

export default DataTable;
