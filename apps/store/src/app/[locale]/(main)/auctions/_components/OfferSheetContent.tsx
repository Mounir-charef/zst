import {
  Button,
  SheetClose,
  SheetFooter,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@mono/ui';
import { format } from 'date-fns';
import { Clock2Icon, DollarSignIcon, StoreIcon } from 'lucide-react';
import Image from 'next/image';
import { memo } from 'react';
import { AuctionWithOffers } from '../../../../../validation/auction-schema';

const offerData = [
  {
    variations: ['black'],
    price: 600.8,
    quantity: 100,
  },

  {
    variations: ['Blue'],
    price: 1200.8,
    quantity: 500,
  },
] as const;

const ProductDetails = ({ auction }: { auction: AuctionWithOffers }) => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-lg font-medium">Product details</h5>
      <div className="bg-accent flex items-center gap-8 rounded-md p-2">
        <Image
          src={auction.image}
          alt={auction.name}
          width={100}
          height={100}
          className="size-[100px] rounded-lg object-cover"
        />
        <div className="flex-1 space-y-2">
          <h3 className="font-medium">{auction.name}</h3>
          <div className="flex flex-1 flex-col gap-2 border-s-4 ps-4 text-xs">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5">
                <div className="text-muted-foreground flex items-center gap-0.5 whitespace-nowrap">
                  <DollarSignIcon
                    size={12}
                    className="bg-muted-foreground stroke-background rounded-sm"
                  />
                  Price
                </div>
                <span className="font-medium">{`${auction.price.min}$ - ${auction.price.max}$`}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="text-muted-foreground flex items-center gap-0.5 whitespace-nowrap">
                  <StoreIcon size={12} className="stroke-muted-foreground" />
                  Quantity
                </div>
                <span className="font-medium">{`${auction.quantity.min} - ${auction.quantity.max}`}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-muted-foreground flex items-center gap-1.5 whitespace-nowrap">
                <Clock2Icon size={12} />
                Created
              </div>
              <span className="font-medium">
                {format(new Date(auction.created_at), 'PPpp')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OfferDetails = () => {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow className="divide-x">
          <TableHead>Variations</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity Available</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {offerData.map((row) => (
          <TableRow className="divide-x" key={row.variations.join('')}>
            <TableCell>{row.variations.join(', ')}</TableCell>
            <TableCell>{`$${row.price}`}</TableCell>
            <TableCell>{`${row.quantity} pieces`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const OfferSheetContent = ({ auction }: { auction: AuctionWithOffers }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex h-full flex-1 flex-col gap-4 p-6">
        <ProductDetails auction={auction} />
        <OfferDetails />
      </div>
      <SheetFooter className="flex flex-col gap-2 border-t p-6 shadow-2xl shadow-black sm:flex-col sm:space-x-0">
        <SheetClose asChild>
          <Button variant="success" size="lg">
            Place Order
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button variant="secondary" size="lg">
            Back To auctions
          </Button>
        </SheetClose>
      </SheetFooter>
    </div>
  );
};

export default memo(OfferSheetContent);
