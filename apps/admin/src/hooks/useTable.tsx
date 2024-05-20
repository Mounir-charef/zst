'use client';

import { useMemo } from 'react';
import DataTable, { DataTableProps } from '../components/ui/DataTable';
import { BaseDataItem } from '../types/common';
import { TypedUseQueryListing } from '../types/react-query';
import useSearch from './useSearch';
import useSelectRows from './useSelectRows';
import { PaginationProps } from '../components/ui/pagination/Pagination';

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

  // useSta

  const paginationProps = useMemo<PaginationProps | undefined>(() => {
    const totalPages = data?.total;
    if (totalPages) {
      const skip = search.skip ? parseInt(search.skip) : 0;
      const limit = search.limit ? parseInt(search.limit) : 10;
      const currentPage = !skip ? 1 : Math.floor(skip / limit + 1);
      return {
        pageSize: limit,
        onPageSizeChange(limit) {
          const skip = (currentPage - 1) * limit;
          handleSearch('limit', limit + '', false);
          handleSearch('skip', skip + '', false);
        },
        currentPage,
        onPageChange(page) {
          const skip = (page - 1) * limit;
          handleSearch('skip', skip + '', false);
        },
        totalPages,
      };
    }
    return undefined;
  }, [data, search]);

  return {
    Table: (
      <DataTable<T>
        data={(data as { data: T[] })?.data || (data as T[])}
        selectableRows={selectableRows}
        isLoading={isLoading}
        {...(selectableRows ? { selectedRows, setSelectedRows } : {})}
        {...args}
        pagination={paginationProps}
      />
    ),
    data,
    selectedRows,
    search,
    handleSearch,
  };
}
