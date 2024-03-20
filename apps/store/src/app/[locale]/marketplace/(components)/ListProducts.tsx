import InfiniteScroll from 'react-infinite-scroll-component';
import { MarketPlaceCard } from './MarketPlaceCard';
import { Loader } from 'lucide-react';
import { MarketplaceProduct } from 'apps/store/src/dataApi/marketplace';
import { TUseQueryListResult } from 'apps/store/src/types';

const ListProducts = ({
  query,
}: {
  query: TUseQueryListResult<MarketplaceProduct>;
}) => {
  return (
    <InfiniteScroll
      dataLength={query.data?.length}
      next={query.loadMore}
      hasMore={query.hasMore}
      loader={
        <div className="flex items-center justify-center h-48">
          <Loader className="animate-spin" />
        </div>
      }
      className="flex flex-col gap-2 pb-4 items-center"
    >
      <div className="grid pt-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">
        {query?.data?.map((product) => (
          <MarketPlaceCard key={product.id} product={product} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ListProducts;
