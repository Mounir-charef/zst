import { UseQueryOptions } from "@tanstack/react-query";

export interface QueryOptions extends UseQueryOptions{
  page?: number;
  limit?: number;
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
