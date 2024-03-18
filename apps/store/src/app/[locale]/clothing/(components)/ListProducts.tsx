import InfiniteScroll from 'react-infinite-scroll-component';
import { ClothesProductCard, ClothingProduct } from './ClothesProductCard';
import { Loader } from 'lucide-react';

const ListProducts = ({
  query,
}: {
  query: {
    data: ClothingProduct[];
    isLoading: boolean;
    error: unknown;
    isFetching: boolean;
    isLoadingMore: boolean;
    loadMore: () => void;
    hasMore: boolean;
  };
}) => {
  return (
    <InfiniteScroll
      dataLength={query.data?.length} //This is important field to render the next data
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
          <ClothesProductCard key={product.id} product={product} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ListProducts;
