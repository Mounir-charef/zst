import { Badge, buttonVariants } from '@mono/ui';
import { cn } from '@mono/util';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes, memo } from 'react';

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  price: {
    min: number;
    max: number;
  };
  description: string;
  variations: number;
}

const ProductCard = ({
  description,
  image,
  price,
  variations,
  ...props
}: ProductCardProps) => {
  return (
    <div
      {...props}
      className={cn(
        'flex w-full max-w-sm flex-col gap-4 rounded-lg text-sm',
        props.className,
      )}
    >
      <Link
        href="#"
        className={buttonVariants({
          variant: 'outline',
          className: 'relative aspect-square h-auto w-full',
        })}
      >
        <Image
          src={image}
          alt={description}
          className="h-60 w-60 object-cover object-center"
          fill
        />
      </Link>

      <Badge className="w-fit">{variations} variations</Badge>
      <div>{description}</div>

      <span className="text-lg font-semibold">
        {price.min === price.max
          ? `$${price.min}`
          : `$${price.min} - $${price.max}`}
      </span>
    </div>
  );
};

export default memo(ProductCard);
