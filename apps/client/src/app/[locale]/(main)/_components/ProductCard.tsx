import { Badge, buttonVariants } from '@mono/ui';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

interface ProductCardProps {
  title: string;
  price: {
    min: number;
    max: number;
  };
  image: string;
  variations: number;
  trending?: boolean;
}

const ProductCard = ({
  title,
  image,
  price,
  variations,
  trending = false,
}: ProductCardProps) => {
  return (
    <div className="flex w-56 flex-col gap-4 rounded-lg text-sm">
      <Link
        href="#"
        className={buttonVariants({
          variant: 'outline',
          className: 'relative aspect-square h-full',
        })}
      >
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-cover object-center"
        />
        {trending && (
          <Badge
            variant="outline"
            className="bg-background absolute left-2 top-2 z-10"
          >
            Trending
          </Badge>
        )}
      </Link>

      <p>{title}</p>

      <div className="flex gap-4">
        <div className="flex -space-x-0.5">
          <div className="bg-success ring-background size-6 rounded-full ring" />
          <div className="bg-destructive ring-background size-6 rounded-full ring" />
        </div>
        <span className="font-semibold">{variations} variations</span>
      </div>

      <span className="text-lg font-semibold">
        {price.min === price.max
          ? `$${price.min}`
          : `$${price.min} - $${price.max}`}
      </span>
    </div>
  );
};

export default memo(ProductCard);
