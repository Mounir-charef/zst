import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import {
  IQueryResultInfo,
  InfinitePaginatorInfo,
  QueryOptions,
} from '../types';
import { API_ENDPOINTS } from './api_endpoints';
import client from './client';

export interface MarketplaceProductQueryOptions extends QueryOptions {
  name: string;
}

export type MarketplaceProduct = {
  id: number;
  name: string;
  imgUrl: string;
  startPrice: number;
  endPrice: number;
};

export function useGetMarketplaceProducts(
  params?: Partial<MarketplaceProductQueryOptions>,
  options?: Partial<
    UseInfiniteQueryOptions<
      IQueryResultInfo<MarketplaceProduct>,
      unknown,
      InfinitePaginatorInfo<MarketplaceProduct>
    >
  >
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
    IQueryResultInfo<MarketplaceProduct>,
    unknown,
    InfinitePaginatorInfo<MarketplaceProduct>
  >({
    queryKey: [API_ENDPOINTS.MARKETPLACE, params],
    queryFn: ({ queryKey, pageParam = 1 }) => {
      const obj = Object.assign(
        {},
        queryKey[1],
        pageParam
      ) as Partial<MarketplaceProductQueryOptions>;

      return client.products.all(obj);
    },
    getNextPageParam: ({ meta }) => {
      const currentPage = meta?.currentPage;
      const totalPages = meta?.totalPages;

      return currentPage < totalPages ? { page: currentPage + 1 } : undefined;
    },
    initialPageParam: options?.initialPageParam ?? 1,

    ...options,
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
