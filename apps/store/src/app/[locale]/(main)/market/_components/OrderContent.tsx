import { Label, RadioGroup, RadioGroupItem } from '@mono/ui';
import { memo } from 'react';
import { useSuspenseAuthQuery } from '../../../../../hooks/useAuthQuery';
import { getOffer } from '../_data/getData';

interface OrderContentProps {
  id: string;
}

const OrderContent = ({ id }: OrderContentProps) => {
  const { data } = useSuspenseAuthQuery(['offer', id], () => {
    return getOffer(id);
  });
  return (
    <div className="px-6">
      <div className="space-y-2">
        <Label>4. Shipping</Label>
        <RadioGroup defaultValue="1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              //   className="text-foreground border-foreground"
              value="1"
              id="r1"
            />
            <Label className="font-normal" htmlFor="r1">
              Standard Shipping (delivered in 5-7days)
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem
              //   className="text-foreground border-foreground"
              value="2"
              id="r2"
            />
            <Label className="font-normal" htmlFor="r2">
              Expedited Shipping (delivered in 2-3days)
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem
              //   className="text-foreground border-foreground"
              value="3"
              id="r3"
            />
            <Label className="font-normal" htmlFor="r3">
              Standard Shipping (delivered in 5-7days)
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default memo(OrderContent);
