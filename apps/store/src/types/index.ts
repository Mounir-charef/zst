import { UseQueryOptions } from '@tanstack/react-query';

export interface QueryOptions {
  page?: number;
  limit?: number;
  search?: string;
}

export interface InfinitePaginatorInfo<T> {
  pageParams: Array<{ page: number }>;
  pages: Array<{
    data: T[];
    meta: {
      currentPage: number;
      totalPages: number;
      itemsPerPage: number;
      totalItems: number;
    };
  }>;
}

export interface IQueryResultInfo<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
  };
}

export interface PaginatorInfo<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
  };
}

export interface TUserQueryResult<T>{
  data: T[];
  isLoading: boolean;
  error: unknown;
  isFetching: boolean;
  isLoadingMore: boolean;
  loadMore: () => void;
  hasMore: boolean;
}