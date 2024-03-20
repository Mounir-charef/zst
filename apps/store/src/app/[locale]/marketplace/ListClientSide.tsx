'use client';
import {
  MarketplaceProductQueryOptions,
  useGetMarketplaceProducts,
} from 'apps/store/src/dataApi/marketplace';
import React from 'react';
import ListProducts from './(components)/ListProducts';

const ListClientSide = ({
  defaultParams,
}: {
  defaultParams: Partial<MarketplaceProductQueryOptions>;
}) => {
  const productFetched = useGetMarketplaceProducts(defaultParams, {
    staleTime: 5000,
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 flex-grow  flex-wrap flex relative">
        {/* <ListingFiltersNavigation links={clothingLinks} /> */}
        <div className="font-bold text-center flex-1 flex items-center p-4 flex-col bg-gray-100">
          <ListProducts query={productFetched} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListClientSide);
