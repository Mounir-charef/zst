import React from 'react';
import { ID } from '../../../../../../types/common';
import { Button, Label, SheetFooter } from '@mono/ui';
import AcceptOffer from '../actions/AcceptOffer';
import RejectOffer from '../actions/RejectOffer';
import OfferDetailsProduct from './OfferDetailsProduct';
import products from '../../../../../../data/products';

const OfferDetails = ({ id }: { id: ID }) => {
  return (
    <div>
      <div className="px-6">
        <Label className="mb-1">Product details</Label>
        <OfferDetailsProduct
          image={products[0].image}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          maxQuantity={100}
          minQuantity={50}
          price={200}
        />
      </div>

      <SheetFooter className="grid grid-cols-2 gap-4 p-6">
        <AcceptOffer>
          <Button variant={'success'}>Accept</Button>
        </AcceptOffer>
        <RejectOffer>
          <Button variant={'destructive'}>Reject</Button>
        </RejectOffer>
      </SheetFooter>
    </div>
  );
};

export default OfferDetails;
