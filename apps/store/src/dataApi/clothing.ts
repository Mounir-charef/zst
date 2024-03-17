import { useInfiniteQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './api_endpoints';
import client from './client';
import {
  IQueryResultInfo,
  InfinitePaginatorInfo,
  QueryOptions,
} from '../types';

export interface ClothingProductQueryOptions extends QueryOptions {
  name: string;
}

export type ClothingProduct = {
  id: number;
  name: string;
  imgUrl: string;
  startPrice: number;
  endPrice: number;
};

export function useGetClothingProducts(
  options?: Partial<ClothingProductQueryOptions>
) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<
    IQueryResultInfo<ClothingProduct>,
    unknown,
    InfinitePaginatorInfo<ClothingProduct>
  >({
    queryKey: [API_ENDPOINTS.CLOTHING, options],
    queryFn: ({ queryKey, pageParam = 1 }) => {
      const obj = Object.assign(
        {},
        queryKey[1],
        pageParam
      ) as Partial<ClothingProductQueryOptions>;

      return client.products.all(obj);
    },
    initialPageParam: {},
    getNextPageParam: ({ meta }) => {
      const currentPage = meta?.currentPage;
      const totalPages = meta?.totalPages;

      return currentPage < totalPages ? { page: currentPage + 1 } : undefined;
    },
  });

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    data: data?.pages?.flatMap((page) => page.data) ?? [],
    isLoading,
    error,
    isFetching,
    isLoadingMore: isFetchingNextPage,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
}
