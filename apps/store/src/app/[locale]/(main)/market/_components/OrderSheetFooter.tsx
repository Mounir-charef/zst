import { Button, SheetClose } from '@mono/ui';
import { memo } from 'react';

interface OrderSheetFooterProps {
  id: string;
}

const OrderSheetFooter = ({}: OrderSheetFooterProps) => {
  return (
    <div className="mt-auto flex flex-col gap-2 border-t p-6 shadow-2xl shadow-black">
      <div className="text-muted-foreground flex w-full items-center justify-between text-xs">
        <span>Item subtotal (4 variations 106 items)</span>
        <span>US$ 440.98</span>
      </div>
      <div className="text-muted-foreground flex w-full items-center justify-between text-xs">
        <span>Taxes & fees</span>
        <span>US$ 44.98</span>
      </div>
      <div className="flex w-full items-center justify-between text-sm font-semibold">
        <span>Payment amount</span>
        <span>$720.80 ($6.80/piece)</span>
      </div>
      <SheetClose asChild>
        <Button type="submit">Complete order process</Button>
      </SheetClose>
    </div>
  );
};

export default memo(OrderSheetFooter);
