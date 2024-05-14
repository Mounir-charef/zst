'use client';

import DataTable, { DataTableProps } from '../components/ui/DataTable';
import { BaseDataItem } from '../types/common';
import useSearch from './useSearch';
import useSelectRows from './useSelectRows';

interface UseTableArgs<T extends BaseDataItem>
  extends Omit<DataTableProps<T>, 'selectedRows' | 'setSelectedRows'> {}

export default function useTable<T extends BaseDataItem>({
  selectableRows,
  ...args
}: UseTableArgs<T>) {
  const { search, handleSearch } = useSearch();
  const { selectedRows, setSelectedRows } = useSelectRows();

  return {
    Table: (
      <DataTable
        {...args}

        // pagination={{
        //   pageSize: search.pageSize ? parseInt(search.pageSize) : 10,
        //   onPageSizeChange(pageSize) {
        //     handleSearch('pageSize', pageSize + '', false);
        //   },
        //   currentPage: search.page ? parseInt(search.page) : 1,
        //   onPageChange(page) {
        //     handleSearch('page', page + '', false);
        //   },
        //   totalPages: 1000,
        // }}
      />
    ),
  };
}
