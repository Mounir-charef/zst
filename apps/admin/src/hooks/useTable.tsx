'use client';

import { useMemo } from 'react';
import DataTable, { DataTableProps } from '../components/ui/DataTable';
import { BaseDataItem } from '../types/common';
import {
  TypedListResponse,
  TypedPaginationResponse,
  TypedUseQueryListing,
} from '../types/react-query';
import useSearch from './useSearch';
import useSelectRows from './useSelectRows';
import { PaginationProps } from '../components/ui/pagination/Pagination';

interface UseTableArgs<T extends BaseDataItem>
  extends Omit<
    DataTableProps<T>,
    'selectedRows' | 'setSelectedRows' | 'data' | 'pagination'
  > {
  useQuery: TypedUseQueryListing<
    TypedPaginationResponse<T> | TypedListResponse<T>
  >;
}

export default function useTable<T extends BaseDataItem>({
  selectableRows,
  useQuery,
  ...args
}: UseTableArgs<T>) {
  const { search, searchValues, handleSearch } = useSearch();
  const { selectedRows, setSelectedRows } = useSelectRows();

  const { data, isLoading } = useQuery(searchValues);

  const paginationProps = useMemo<PaginationProps | undefined>(() => {
    const total = (data as TypedPaginationResponse<T>)?.total;
    if (total) {
      const skip = search.skip ? parseInt(search.skip) : 0;
      const limit = search.limit ? parseInt(search.limit) : 10;
      const currentPage = !skip ? 1 : Math.floor(skip / limit + 1);
      const totalPages = Math.ceil(total / limit);

      return {
        pageSize: limit,
        onPageSizeChange(limit) {
          handleSearch('limit', limit + '', false);
          handleSearch('skip', 0 + '', false);
        },
        currentPage,
        onPageChange(page) {
          const skip = calculateSkipValue(page, limit);
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
        data={data?.data}
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

function calculateSkipValue(page: number | string, limit: number | string) {
  return (parseInt(page as string) - 1) * parseInt(limit as string);
}
