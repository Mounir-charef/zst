import { UsePaginationArgs } from '../../../hooks/usePagination';
import PaginationItem from './PaginationItem';
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';

import PaginationText from './PaginationText';
import PaginationRowsPerPage from './PaginationRowsPerPage';

export interface PaginationProps
  extends Omit<UsePaginationArgs, 'siblingCount'> {
  pageSize: number;
  onPageChange: (page: number) => unknown;
  onPageSizeChange: (pageSize: number) => unknown;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPageSizeChange,
  pageSize,
}: PaginationProps) => {
  return (
    <div className="mt-8 flex items-center justify-end gap-12">
      <PaginationRowsPerPage
        pageSize={pageSize}
        onPageSizeChange={onPageSizeChange}
      />
      <div className="flex items-center gap-4">
        <PaginationText text={`Page ${currentPage} of ${totalPages}`} />
        <div className="flex flex-wrap gap-1.5 rtl:flex-row-reverse">
          <PaginationItem
            disabled={currentPage === 1}
            onClick={() => {
              onPageChange(1);
            }}
          >
            <FiChevronsLeft size={14} />
          </PaginationItem>
          <PaginationItem
            disabled={!(currentPage > 1)}
            onClick={() => {
              onPageChange(currentPage - 1);
            }}
          >
            <FiChevronLeft size={14} />
          </PaginationItem>

          <PaginationItem
            disabled={currentPage >= totalPages}
            onClick={() => {
              onPageChange(currentPage + 1);
            }}
          >
            <FiChevronRight size={14} />
          </PaginationItem>
          <PaginationItem
            disabled={currentPage === totalPages}
            onClick={() => {
              onPageChange(totalPages);
            }}
          >
            <FiChevronsRight size={14} />
          </PaginationItem>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
