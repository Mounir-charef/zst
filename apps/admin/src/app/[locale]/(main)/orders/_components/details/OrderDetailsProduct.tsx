import { DollarSign, Store } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { FileResponse } from '../../../../../../types/file';

interface OrderDetailsProductProps {
  image: FileResponse;
  description: string;
  price: number;
  quantity: number;
}

const OrderDetailsProduct = ({
  description,
  image,
  price,
  quantity,
}: OrderDetailsProductProps) => {
  return (
    <div className="bg-foreground/5 bg-fore w-full rounded-md p-2">
      <div className="flex flex-col gap-2 md:flex-row">
        <Image
          src={image?.path}
          alt={description}
          className="aspect-square h-24 w-24 rounded-md object-cover"
          width={100}
          height={100}
        />
        <div className="justify-betweens flex flex-col md:ps-2 ">
          <h3>{description}</h3>
          <div className="border-muted text-md flex items-center gap-1 border-l-2 px-1">
            <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
              <span className=" bg-muted-foreground rounded-sm p-0.5">
                <DollarSign size={12} className="stroke-muted" />
              </span>
              {'Price per item'}
            </span>
            {price}$
            <span className="text-muted-foreground inline-flex items-center text-xs">
              <Store
                size={12}
                className="fill-muted-foreground stroke-background w-4 rounded-s-md"
              />
              {'Quantity'}
            </span>
            {quantity}
            <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
              <span className=" bg-muted-foreground rounded-sm p-0.5">
                <DollarSign size={12} className="stroke-muted" />
              </span>
              {'Total Price'}
            </span>
            {price * quantity}$
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsProduct;
