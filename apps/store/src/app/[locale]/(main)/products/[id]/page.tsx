import FrequentProductsCard from './_components/FrequentProductsCard';
import ProductBenefitsCard from './_components/ProductBenefitsCard';
import ProductDetails from './_components/ProductDetails';
import ProductImagesCard from './_components/ProductImagesCard';
import RecommendationsCard from './_components/RecommendationsCard';
import RelatedCategories from './_components/RelatedCategories';

async function getProductPage(id: string) {
  // mock data
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const images = Array.from(
    { length: 4 },
    (_, i) => `/product/placeholder_${i + 1}.png`,
  );
  return {
    images: {
      mainImage: '/product/mainImage.png',
      images: images,
    },
    details: {
      name: 'Product Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.',
      categories: ['clothing', 't-shirt'],
      variants: [
        {
          name: 'color',
          values: ['black', 'white', 'red', 'blue'],
        },
        {
          name: 'size',
          values: ['S', 'M', 'L', 'XL'],
        },
      ],
    },
  };
}

const ProductDetailsPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const { details, images } = await getProductPage(id);
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
        <div className="flex-1 space-y-4">
          <ProductImagesCard {...images} />
          <RecommendationsCard />
        </div>
        <div className="flex-1 space-y-4">
          <ProductDetails {...details} />
          <ProductBenefitsCard />
          <RelatedCategories />
        </div>
      </div>
      <FrequentProductsCard />
    </div>
  );
};

export default ProductDetailsPage;
