import { Badge, Button } from '@mono/ui';
import { memo } from 'react';
import {
  AuctionOffer,
  AuctionWithOffers,
} from '../../../../../validation/auction-schema';
import OfferSheet from './OfferSheet';

interface OfferProps {
  offer: AuctionOffer;
  auction: AuctionWithOffers;
}

const Offer = ({ offer, auction }: OfferProps) => {
  return (
    <div className="text-muted-foreground animate-in slide-in-from-top-5 fade-in-20 flex gap-8 p-4 text-xs duration-300">
      <div className="w-[100px]" />
      <div className="flex h-full flex-1 items-end justify-between gap-2">
        <div className="space-y-4">
          <div className="flex items-center gap-1.5">
            <Badge variant="reverse">Offer #{offer.id}</Badge>
            <span className="font-medium">{offer.orders} orders</span>
          </div>
          <div className="space-y-1">
            <div>
              Available Quantity:{' '}
              <span className="text-foreground font-medium">
                {offer.quantity}
              </span>
            </div>
            <div>
              Price:{' '}
              <span className="text-foreground text-lg font-semibold">
                {offer.price} $
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">Preview</Button>
          <OfferSheet auction={auction} />
        </div>
      </div>
    </div>
  );
};

export default memo(Offer);
