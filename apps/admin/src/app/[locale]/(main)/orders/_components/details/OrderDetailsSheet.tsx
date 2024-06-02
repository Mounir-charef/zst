import React from 'react';
import OrderDetails from './OrderDetails';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@mono/ui';
import { ID } from '../../../../../../types/common';

interface OrderDetailsSheetProps {
  id: ID;
  children: React.ReactNode;
}

const OrderDetailsSheet = ({ id, children }: OrderDetailsSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:w-full sm:max-w-full md:w-3/4 lg:w-[644px]">
        <SheetHeader className="p-6">
          <SheetTitle>Order Details</SheetTitle>
        </SheetHeader>
        <OrderDetails id={id} />
      </SheetContent>
    </Sheet>
  );
};

export default OrderDetailsSheet;
