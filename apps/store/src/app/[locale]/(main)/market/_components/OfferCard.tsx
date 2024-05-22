import { Button } from '@mono/ui';
import { cn } from '@mono/util';
import Image from 'next/image';
import { HTMLAttributes, memo } from 'react';
import { priceFormatter } from '../../../../../lib/utils';
import { Offer } from '../_types';
import OfferOrderSheet from './OfferOrderSheet';

interface OfferCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'id'>,
    Offer {}

const OfferCard = ({
  id,
  description,
  image,
  price,
  variations,
  min,
  max,
  ...props
}: OfferCardProps) => {
  return (
    <div
      {...props}
      className={cn(
        'bg-muted flex w-full flex-col gap-4 rounded-md p-2 text-sm ',
        props.className,
      )}
    >
      <div className="bg-muted relative  aspect-square h-auto w-full overflow-hidden rounded-md">
        <Image
          src={image}
          alt={description}
          className="object-cover object-center"
          fill
        />
      </div>

      <p className="line-clamp-2">{description}</p>

      <div className="flex gap-4">
        <div className="flex -space-x-0.5">
          <div className="bg-success ring-muted size-6 rounded-full ring" />
          <div className="bg-destructive ring-muted size-6 rounded-full ring" />
        </div>
        <span className="font-semibold">{variations.length} variations</span>
      </div>

      <span className="text-lg font-semibold">{priceFormatter(price)}</span>
      <span className="text-muted-foreground">
        Min {min} - Max {max}
      </span>
      <OfferOrderSheet id={id} />
    </div>
  );
};

export default memo(OfferCard);
