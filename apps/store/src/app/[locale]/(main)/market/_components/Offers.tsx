'use client';

import { memo } from 'react';
import { Offer } from '../_types';
import OfferCard from './OfferCard';

const Offers = ({ data }: { data: Offer[] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((offer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}
    </div>
  );
};

export default memo(Offers);
