'use client';

import DataTable, { DataTableProps } from '../components/ui/DataTable';
import { BaseDataItem } from '../types/common';
import { TypedUseQueryListing } from '../types/react-query';
import useSearch from './useSearch';
import useSelectRows from './useSelectRows';

interface UseTableArgs<T extends BaseDataItem>
  extends Omit<
    DataTableProps<T>,
    'selectedRows' | 'setSelectedRows' | 'data' | 'pagination'
  > {
  useQuery: TypedUseQueryListing;
}

export default function useTable<T extends BaseDataItem>({
  selectableRows,
  useQuery,
  ...args
}: UseTableArgs<T>) {
  const { search, searchValues, handleSearch } = useSearch();
  const { selectedRows, setSelectedRows } = useSelectRows();

  const { data, isLoading } = useQuery(searchValues);

  return {
    Table: (
      <DataTable<T>
        data={data as T[]}
        selectableRows={selectableRows}
        isLoading={isLoading}
        {...(selectableRows ? { selectedRows, setSelectedRows } : {})}
        {...args}
        pagination={{
          pageSize: search.pageSize ? parseInt(search.pageSize) : 10,
          onPageSizeChange(pageSize) {
            handleSearch('pageSize', pageSize + '', false);
          },
          currentPage: search.page ? parseInt(search.page) : 1,
          onPageChange(page) {
            handleSearch('page', page + '', false);
          },
          totalPages: 1000,
        }}
      />
    ),
    data,
    selectedRows,
    search,
    handleSearch,
  };
}
