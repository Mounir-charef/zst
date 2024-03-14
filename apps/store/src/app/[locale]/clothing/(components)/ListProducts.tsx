import { ClothesProductCard, ClothingProduct } from './ClothesProductCard';

const ListProducts = ({ products }: { products: ClothingProduct[] }) => {
  return (
    <div className="grid grid-cols-4 gap-4  w-full">
      {products.map((product) => (
        <ClothesProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListProducts;
