import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@mono/ui';
import { Suspense, memo } from 'react';
import OrderContent from './OrderContent';
import OrderSheetFooter from './OrderSheetFooter';
import { Loader2 } from 'lucide-react';

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
      <SheetContent className="flex w-full flex-col gap-4 p-0 sm:w-full sm:max-w-full md:w-3/4 lg:w-[644px]">
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
          <OrderSheetFooter id={id} />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
};

export default memo(OfferOrderSheet);
