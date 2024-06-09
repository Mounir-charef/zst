import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@mono/ui';
import { memo } from 'react';
import OfferSheetContent from './OfferSheetContent';
import { AuctionWithOffers } from '../../../../../validation/auction-schema';

interface OfferSheetProps {
  auction: AuctionWithOffers;
}

const OfferSheet = ({ auction }: OfferSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="success">Place Order</Button>
      </SheetTrigger>
      <SheetContent className="flex h-auto w-full flex-col gap-4 overflow-auto p-0 sm:w-full sm:max-w-full md:w-3/4 lg:w-[644px]">
        <SheetHeader className="p-6">
          <SheetTitle>Offer details</SheetTitle>
          <SheetDescription>
            Check the offer details before confirming it
          </SheetDescription>
        </SheetHeader>

        <OfferSheetContent auction={auction} />
      </SheetContent>
    </Sheet>
  );
};

export default memo(OfferSheet);
