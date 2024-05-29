import React from 'react';
import { ID } from '../../../../../../types/common';
import { Button, SheetFooter } from '@mono/ui';
import AcceptOffer from '../actions/AcceptOffer';
import RejectOffer from '../actions/RejectOffer';

const OfferDetails = ({ id }: { id: ID }) => {
  return (
    <div>
      <div className="border-y border-t p-6"></div>

      <SheetFooter className="gap-2 p-6">
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
