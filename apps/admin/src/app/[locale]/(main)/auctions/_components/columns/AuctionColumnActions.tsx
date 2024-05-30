import React from 'react';
import { ID } from '../../../../../../types/common';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import { Button } from '@mono/ui';
import RejectAuction from '../actions/RejectAuction';
import AcceptAuction from '../actions/AcceptAuction';

interface AuctionColumnActionsProps {
  id: ID;
}

const AuctionColumnActions = ({ id }: AuctionColumnActionsProps) => {
  return (
    <ColumnActionWrapper>
      <Button size={'sm'}>View</Button>
      <AcceptAuction>
        <Button variant={'success'} size={'sm'}>
          Accept
        </Button>
      </AcceptAuction>
      <RejectAuction>
        <Button variant={'destructive'} size={'sm'}>
          Reject
        </Button>
      </RejectAuction>
    </ColumnActionWrapper>
  );
};

export default AuctionColumnActions;
