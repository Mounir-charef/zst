import InfiniteScroll from 'react-infinite-scroll-component';
import { ClothesProductCard, ClothingProduct } from './ClothesProductCard';

const ListProducts = ({
  products,
  loadMore,
}: {
  products: ClothingProduct[];
  loadMore: () => void;
}) => {
  return (
    <InfiniteScroll
      dataLength={products?.length} //This is important field to render the next data
      next={loadMore}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      className="grid grid-cols-5 gap-4 w-full"
    >
      {products.map((product) => (
        <ClothesProductCard key={product.id} product={product} />
      ))}
    </InfiniteScroll>
  );
};

export default ListProducts;
