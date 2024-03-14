import { ClothesProductCard, ClothingProduct } from './ClothesProductCard';

const ListProducts = ({ products }: { products: ClothingProduct[] }) => {
  return (
    <div className="grid grid-cols-6 gap-4 w-full h-full">
      {products.map((product) => (
        <ClothesProductCard key={product.id} product={product} />
      ))}
         {products.map((product) => (
        <ClothesProductCard key={product.id} product={product} />
      ))}
         {products.map((product) => (
        <ClothesProductCard key={product.id} product={product} />
      ))}
         {products.map((product) => (
        <ClothesProductCard key={product.id} product={product} />
      ))}
         {products.map((product) => (
        <ClothesProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListProducts;
