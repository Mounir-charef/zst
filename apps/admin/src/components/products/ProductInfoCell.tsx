import React from 'react';
import { TypedProductListing } from '../../types/product';
import Image from 'next/image';

const ProductInfoCell = ({
  product,
}: {
  product: Pick<TypedProductListing, 'name' | 'image'>;
}) => {
  return (
    <div className="flex items-center gap-x-4">
      <Image
        alt="Product image"
        className="aspect-square rounded-md object-cover"
        height="64"
        src={product?.image?.path}
        width="64"
      />
      <span className="max-w-80 truncate font-medium">{product?.name}</span>
    </div>
  );
};

export default ProductInfoCell;
