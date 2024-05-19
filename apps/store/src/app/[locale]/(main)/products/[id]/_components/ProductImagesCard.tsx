'use client';

import { Card, CardContent } from '@mono/ui';
import Image from 'next/image';

interface ProductImagesCardProps {
  images: string[];
  mainImage: string;
}

const ProductImagesCard = ({ images, mainImage }: ProductImagesCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <Image
          src={mainImage}
          alt="Main product image"
          className="aspect-square w-full object-cover object-center"
          width={520}
          height={520}
          sizes="(min-width: 1024px) 520px, 100vw"
        />
        <div className="flex flex-wrap items-center justify-start gap-6 py-2">
          {images.map((image, index) => (
            <Image
              src={image}
              alt={`Product image ${index}`}
              className="h-20 w-20 rounded object-cover object-center"
              priority
              width={75}
              height={75}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductImagesCard;
