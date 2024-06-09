import { Button } from '@mono/ui';
import Image from 'next/image';
import { memo, useMemo } from 'react';
import { Product } from '../../../../../../validation/product-schema';

interface ProductSelectionItemProps {
  product: Product;
  selectedProduct: number | string | undefined;
  changeProduct: (productId: number | string) => void;
}

const ProductSelectionItem = ({
  changeProduct,
  product,
  selectedProduct,
}: ProductSelectionItemProps) => {
  const isSelected = useMemo(
    () => selectedProduct === product.id,
    [selectedProduct, product.id],
  );

  return (
    <div key={product.id} className="flex items-center justify-between p-3">
      <div className="flex items-center gap-4">
        <Image
          alt={product.name}
          className="aspect-square rounded-md object-cover"
          height="64"
          src="/placeholder.svg"
          width="64"
        />
        <div className="font-light">
          <p>{product.name}</p>
          <p className="text-sm">2 Variations</p>
        </div>
      </div>
      <Button
        onClick={() => changeProduct(product.id)}
        variant={
          !isSelected && selectedProduct !== undefined ? 'secondary' : 'success'
        }
      >
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </div>
  );
};

export default memo(ProductSelectionItem);
