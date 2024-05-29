'use client';
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@mono/ui';
import { Loader2 } from 'lucide-react';
import { Suspense, memo } from 'react';
import OrderContent from './OrderContent';

interface OfferOrderSheetProps {
  id: string;
}

const OfferOrderSheet = ({ id }: OfferOrderSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="success" size="lg" className="w-full">
          Place Order
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-auto w-full flex-col gap-4 overflow-auto p-0 sm:w-full sm:max-w-full md:w-3/4 lg:w-[644px]">
        <SheetHeader className="p-6">
          <SheetTitle>Place order</SheetTitle>
          <SheetDescription>Fill order information</SheetDescription>
        </SheetHeader>
        <Suspense
          fallback={
            <div className="grid h-full w-full place-items-center">
              <Loader2 className="text-primary animate-spin" />
            </div>
          }
        >
          <OrderContent id={id} />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
};

export default memo(OfferOrderSheet);
