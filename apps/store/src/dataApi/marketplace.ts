import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import {
  IQueryResultInfo,
  InfinitePaginatorInfo,
  QueryOptions,
  TUseQueryListResult,
  TUseQueryOneResult,
} from '../types';
import { API_ENDPOINTS } from './api_endpoints';
import client from './client';

export interface MarketplaceProductQueryOptions extends QueryOptions {
  name: string;
}

export type TProductAttributes = Array<
  | {
      key: string;
      label: string;
      type: 'TEXT';
      value: string;
      values: never;
    }
  | {
      key: string;
      label: string;
      type: 'BADGES';
      values: string[];
      value: never;
    }
>;

export type MarketplaceProduct = {
  id: number;
  name: string;
  imgUrl: string;
  startPrice: number;
  endPrice: number;
  textDescription: string;
  details: TProductAttributes;
  attachments?: string[];
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
): TUseQueryListResult<MarketplaceProduct> {
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

      return client.marketplace_products.all(obj);
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

export function useFindMarketplaceProduct(
  id: string | number,
  options?: Partial<
    UseQueryOptions<MarketplaceProduct, unknown, MarketplaceProduct>
  >
): TUseQueryOneResult<MarketplaceProduct> {
  const { data, isLoading, error, isFetching } = useQuery<
    MarketplaceProduct,
    unknown,
    MarketplaceProduct
  >({
    queryKey: [API_ENDPOINTS.MARKETPLACE + `/${id}`, id],
    queryFn: () => {
      return client.marketplace_products.findOne(id);
    },
    staleTime: 5000,
    ...options,
  });

  return {
    data,
    isLoading,
    error,
    isFetching,
  };
}
