import { memo } from 'react';
import ProductDetailsForm from '../_components/form/ProductDetailsForm';
import { IProductDetails } from '../types';

async function getProductDetails(id: string): Promise<IProductDetails> {
  console.log('fetching product with id :', id);
  // wait for 1sec
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    details: {
      name: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
    },
    variants: [
      {
        name: 'Color',
        values: ['Red', 'Blue', 'Green'],
      },
      {
        name: 'Size',
        values: ['S', 'M', 'L'],
      },
    ],
    status: 'draft',
    stock: [],
    mainImage: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
    productImages: [],
    category: 'electronics',
  };
}

const ProductDetailsPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const productDetails = await getProductDetails(id);
  return <ProductDetailsForm defaultValues={productDetails} />;
};

export default memo(ProductDetailsPage);
