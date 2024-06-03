'use client';

import { Input, ScrollArea } from '@mono/ui';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { Loader2, SearchIcon, XIcon } from 'lucide-react';
import { Fragment, memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDebounceValue } from 'usehooks-ts';
import { z } from 'zod';
import products from '../../../../../../lib/data/products/products.json';
import { productSchema } from '../../../../../../validation/product-schema';
import ProductSelectionItem from './ProductSelectionItem';

interface ProductSelectionListProps {
  selectedProduct: number | string | undefined;
  changeProduct: (productId: number | string) => void;
}

const ProductSelectionList = ({
  selectedProduct,
  changeProduct,
}: ProductSelectionListProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useDebounceValue('', 500);

  const handleClear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      if ('value' in inputRef.current) {
        inputRef.current.value = '';
      }
    }
    setSearch('');
  }, [setSearch]);
  const { ref, inView } = useInView();

  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['products', search],
      initialPageParam: 1,
      queryFn: async ({ pageParam = 1 }) => {
        const data = z.array(productSchema).parse(products);
        await new Promise((resolve) => setTimeout(resolve, 500));
        return data
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase()),
          )
          .slice((pageParam - 1) * 10, pageParam * 10);
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
      placeholderData: keepPreviousData,
    });

  const fetchedProducts = useMemo(() => {
    return data?.pages.flat();
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <div className="flex flex-col divide-y">
      <div className="py-3">
        <div className="group relative">
          {isFetching ? (
            <Loader2 className="text-muted-foreground absolute start-2.5 top-3 h-4 w-4 animate-spin" />
          ) : (
            <SearchIcon className="text-muted-foreground absolute start-2.5 top-3 h-4 w-4" />
          )}
          <Input
            ref={inputRef}
            className="rounded-lg ps-8"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a product..."
          />
          {search && (
            <XIcon
              onKeyDown={(e) => e.key === 'Enter' && handleClear()}
              role="button"
              tabIndex={0}
              aria-label="Clear search"
              onClick={handleClear}
              className="hover:text-destructive text-muted-foreground absolute end-2.5 top-3 hidden h-4 w-4 cursor-pointer group-focus-within:block"
            />
          )}
        </div>
      </div>
      <ScrollArea className="flex h-72 flex-col" key={search}>
        {!fetchedProducts || fetchedProducts.length === 0 ? (
          <div className="flex h-72 items-center justify-center">
            No products found
          </div>
        ) : null}
        {fetchedProducts?.map((product, index) => (
          <Fragment>
            <ProductSelectionItem
              key={product.id}
              changeProduct={changeProduct}
              selectedProduct={selectedProduct}
              product={product}
            />
            {index === fetchedProducts.length - 1 && hasNextPage ? (
              <div ref={ref} className="flex h-12 items-center justify-center">
                <Loader2
                  ref={ref}
                  className="text-muted-foreground h-4 w-4 animate-spin"
                />
              </div>
            ) : null}
          </Fragment>
        ))}
      </ScrollArea>
    </div>
  );
};

export default memo(ProductSelectionList);
