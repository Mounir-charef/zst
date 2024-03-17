'use client';
import {
  ClothingProductQueryOptions,
  useGetClothingProducts,
} from '../../../dataApi/clothing';
import ListingFiltersNavigation from '../../../components/ListingFiltersNavigation/ListingFiltersNavigation';
import ListProducts from './(components)/ListProducts';
import { clothingLinks } from './data/data';
import Image from 'next/image';
import { clothingHeroSection } from '../../../assets';
import { Button, Input } from '@mono/ui';
import { Search } from 'lucide-react';

const ProductsListClientSide = ({
  defaultParams,
}: {
  defaultParams: Partial<ClothingProductQueryOptions>;
}) => {
  const productFetched = useGetClothingProducts(defaultParams, {
    staleTime: 5000,
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 flex-grow  flex-wrap flex relative">
        <ListingFiltersNavigation links={clothingLinks} />
        <div className="font-bold text-center flex-1 flex items-center p-4 flex-col bg-gray-100">
          <ListProducts query={productFetched} />
        </div>
      </div>
    </div>
  );
};

export default ProductsListClientSide;
