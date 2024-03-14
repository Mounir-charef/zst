import { useInfiniteQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from './api_endpoints';
import client from './client';

export interface QueryOptions {
  page?: number;
  limit?: number;
}

export interface ClothingProductQueryOptions extends QueryOptions {
  shop_id: string;
  sortedBy: string;
  orderBy: string;
  name: string;
  categories: string;
  tags: string;
  type: string;
  manufacturer: string;
  author: string;
  price: string;
  min_price: string;
  max_price: string;
  language: string;
  searchType: string;
  searchQuery: string;
  text: string;
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
  const formattedOptions = {
    ...options,
  };

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [API_ENDPOINTS.CLOTHING, formattedOptions],
    queryFn: ({ queryKey, pageParam }) =>
      client.products.all(Object.assign({}, queryKey[1], pageParam)),

    // @ts-expect-error No overload matches this call.

    getNextPageParam: ({ current_page, last_page }) =>
      last_page > current_page && { page: current_page + 1 },
  });

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    data: data?.pages?.flatMap((page) => page.data) ?? [],
    paginatorInfo: null,
    isLoading,
    error,
    isFetching,
    isLoadingMore: isFetchingNextPage,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
}
