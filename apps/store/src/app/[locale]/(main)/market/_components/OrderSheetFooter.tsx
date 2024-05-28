import { Button } from '@mono/ui';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';

interface OrderSheetFooterProps {
  id: string;
  orderDetails: {
    items: {
      variations: number;
      quantity: number;
    };
    fees: {
      subtotal: number;
      taxes: number;
      payment: number;
    };
  };
  isLoading?: boolean;
  error?: {
    isError: boolean;
    message: string;
  };
}

const OrderSheetFooter = ({
  id,
  orderDetails,
  isLoading = false,
  error,
}: OrderSheetFooterProps) => {
  return (
    <div className="mt-auto flex flex-col gap-2 border-t p-6 shadow-2xl shadow-black">
      <div className="text-muted-foreground flex w-full items-center justify-between text-xs">
        <span>
          Item subtotal ({orderDetails.items.variations} variations{' '}
          {orderDetails.items.quantity} items)
        </span>
        <span>US$ {orderDetails.fees.subtotal}</span>
      </div>
      <div className="text-muted-foreground flex w-full items-center justify-between text-xs">
        <span>Taxes & fees</span>
        <span>US$ {orderDetails.fees.taxes}</span>
      </div>
      <div className="flex w-full items-center justify-between text-sm font-semibold">
        <span>Payment amount</span>
        <span>{} ($6.80/piece)</span>
      </div>
      <Button type="submit">
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          'Complete order process'
        )}
      </Button>
      {/* <SheetClose asChild>
      </SheetClose> */}
    </div>
  );
};

export default memo(OrderSheetFooter);
