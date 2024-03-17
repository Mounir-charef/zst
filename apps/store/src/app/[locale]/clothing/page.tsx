'use client';
import { useGetClothingProducts } from '../../../dataApi/clothing';
import ListingFiltersNavigation from '../../../components/ListingFiltersNavigation/ListingFiltersNavigation';
import ListProducts from './(components)/ListProducts';
import { clothingLinks } from './data/data';

const Page = () => {
  const productFetched = useGetClothingProducts({ page: 1, limit: 10 });

  return (
    <div className="flex flex-col">
      <div className="bg-blue-100 flex justify-center items-center h-40">
        SECTION HERO
      </div>
      <div className="flex-1 flex-grow  flex-wrap flex relative">
        <ListingFiltersNavigation links={clothingLinks} />
        <div className="font-bold text-center flex-1 flex items-start p-4 flex-col bg-gray-100">
          <ListProducts
            loadMore={productFetched.loadMore}
            products={productFetched.data}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
