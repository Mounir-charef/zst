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
import AuctionSheetContent from './OfferSheetContent';

const AuctionSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex-1" variant="success">
          Place Offer
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-auto w-full flex-col gap-0 overflow-auto p-0 sm:w-full sm:max-w-full md:w-3/4 lg:w-1/2">
        <SheetHeader className="p-6 pb-8">
          <SheetTitle className="text-2xl font-semibold">
            Create offer
          </SheetTitle>
          <SheetDescription className="text-base">
            Fill order information
          </SheetDescription>
        </SheetHeader>

        <AuctionSheetContent />
      </SheetContent>
    </Sheet>
  );
};

export default memo(AuctionSheet);
