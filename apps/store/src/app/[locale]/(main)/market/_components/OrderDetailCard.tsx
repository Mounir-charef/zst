import React from 'react';
import { Offer } from '../_types';
import Image from 'next/image';
import { DollarSign, Store } from 'lucide-react';

const OrderDetailCard = ({ data }: { data: Offer }) => {
  return (
    <div className="bg-foreground/5 bg-fore w-full rounded-md p-2">
      <div className="flex ">
        <Image
          src={data?.image}
          alt={data.description}
          className="aspect-square h-24 w-24 rounded-md object-cover"
          width={100}
          height={100}
        />
        <div className="justify-betweens flex flex-col ps-2">
          <h3>{data.description}</h3>
          <div className="border-muted text-md flex items-center gap-1 border-l-2 px-1">
            <span className="text-muted-foreground inline-flex items-center gap-1 text-xs">
              <span className=" bg-muted-foreground rounded-sm p-0.5">
                <DollarSign size={12} className="stroke-muted" />
              </span>
              {'Price'}
            </span>
            {data.price}$
            <span className="text-muted-foreground inline-flex items-center text-xs">
              <Store
                size={12}
                className="fill-muted-foreground stroke-background w-4 rounded-s-md"
              />
              {'Quantity'}
            </span>
            Min {data.max}- Max {data.min}
          </div>
          <ul className="mt-4 flex gap-4">
            <li className="flex flex-col gap-3">
              <span className="text-muted-foreground text-sm">
                100 - 499 pieces
              </span>
              <span className="font-semibold">-1% Price</span>
            </li>
            <li className="flex flex-col gap-3">
              <span className="text-muted-foreground text-sm">
                100 - 499 pieces
              </span>
              <span className="font-semibold">-1% Price</span>
            </li>
            <li className="flex flex-col gap-3">
              <span className="text-muted-foreground text-sm">
                100 - 499 pieces
              </span>
              <span className="font-semibold">-1% Price</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailCard;
