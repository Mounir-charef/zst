'use client';
import React, { useEffect, useRef } from 'react';
import ListingFiltersNavigation from '../../../components/ListingFiltersNavigation/ListingFiltersNavigation';
import {
  ClothingProductQueryOptions,
  useGetClothingProducts,
} from '../../../dataApi/clothing';
import ListProducts from './(components)/ListProducts';
import { clothingLinks } from './data/data';

const ProductsListClientSide = ({
  defaultParams,
}: {
  defaultParams: Partial<ClothingProductQueryOptions>;
}) => {
  const productFetched = useGetClothingProducts(defaultParams, {
    staleTime: 5000,
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!defaultParams.search) {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [defaultParams?.search]);

  return (
    <div className="flex flex-col" ref={ref}>
      <div className="flex-1 flex-grow  flex-wrap flex relative">
        <ListingFiltersNavigation links={clothingLinks} />
        <div className="font-bold text-center flex-1 flex items-center p-4 flex-col bg-gray-100">
          <ListProducts query={productFetched} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductsListClientSide);
