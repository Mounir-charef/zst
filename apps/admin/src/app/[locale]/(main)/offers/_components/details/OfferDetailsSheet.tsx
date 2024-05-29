import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@mono/ui';
import React from 'react';
import OfferDetails from './OfferDetails';
import { ID } from '../../../../../../types/common';

const OfferDetailsSheet = ({
  id,
  children,
}: {
  children: React.ReactNode;
  id: ID;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:w-full sm:max-w-full md:w-3/4 lg:w-[644px]">
        <SheetHeader className="p-6">
          <SheetTitle>Offer Details</SheetTitle>
        </SheetHeader>
        <OfferDetails id={id} />
      </SheetContent>
    </Sheet>
  );
};

export default OfferDetailsSheet;
