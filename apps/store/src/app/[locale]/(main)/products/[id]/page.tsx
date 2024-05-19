import ProductImagesCard from './_components/ProductImagesCard';

async function getProductPage(id: string) {
  // mock data
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const images = Array.from(
    { length: 4 },
    (_, i) => `/product/placeholder_${i + 1}.png`,
  );
  return {
    mainImage: '/product/mainImage.png',
    images: images,
  };
}

const ProductDetailsPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const { images, mainImage } = await getProductPage(id);
  return (
    <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
      <div className="flex-1 space-y-4">
        <ProductImagesCard mainImage={mainImage} images={images} />
      </div>
      <div className="flex-1 space-y-4"></div>
    </div>
  );
};

export default ProductDetailsPage;
