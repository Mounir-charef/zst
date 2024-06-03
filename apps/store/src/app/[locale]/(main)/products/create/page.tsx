import { IProductDetails } from '../../../../../validation/add-product-schema';
import ProductDetailsForm from '../_components/form/ProductDetailsForm';

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
        name: 'color',
        values: ['Red', 'Blue', 'Green'],
      },
      {
        name: 'size',
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

export default async function NewProductPage({
  searchParams: { id },
}: {
  searchParams: { id?: string };
}) {
  if (id) {
    const productDetails = await getProductDetails(id);
    return <ProductDetailsForm defaultValues={productDetails} />;
  }
  return <ProductDetailsForm />;
}
