import React from 'react';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import { Button } from '@mono/ui';
import AcceptOffer from '../actions/AcceptOffer';
import RejectOffer from '../actions/RejectOffer';
import OfferDetailsSheet from '../details/OfferDetailsSheet';
import { ID } from '../../../../../../types/common';

interface OfferColumnActionsProps {
  id: ID;
}

const OfferColumnActions = ({ id }: OfferColumnActionsProps) => {
  return (
    <ColumnActionWrapper>
      <OfferDetailsSheet id={id}>
        <Button size={'sm'}>View</Button>
      </OfferDetailsSheet>
      <AcceptOffer>
        <Button size={'sm'} variant="success">
          Accept
        </Button>
      </AcceptOffer>
      <RejectOffer>
        <Button size={'sm'} variant="destructive">
          Reject
        </Button>
      </RejectOffer>
    </ColumnActionWrapper>
  );
};

export default OfferColumnActions;
