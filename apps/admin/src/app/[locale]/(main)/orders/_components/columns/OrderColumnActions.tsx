import React from 'react';
import { ID } from '../../../../../../types/common';
import ColumnActionWrapper from '../../../../../../components/table-columns/ColumnActionWrapper';
import { Button } from '@mono/ui';
import AcceptOrder from '../actions/AcceptOrder';
import RejectOrder from '../actions/RefuseOrder';
import OrderDetailsSheet from '../details/OrderDetailsSheet';
import OrderActionRenderer from '../../../../../../components/orders/OrderActionRenderer';
import { orderStatues } from '../../../../../../data/orders';
import OrderAcceptOrRejectRenderer from '../../../../../../components/orders/OrderAcceptOrRejectRenderer';

interface OrderColumnActionsProps {
  id: ID;
  status: string;
}

const OrderColumnActions = ({ id, status }: OrderColumnActionsProps) => {
  return (
    <ColumnActionWrapper>
      <OrderDetailsSheet id={id}>
        <Button size="sm">View</Button>
      </OrderDetailsSheet>
      <OrderAcceptOrRejectRenderer status={status}>
        <AcceptOrder>
          <Button size="sm" variant="success">
            Accept
          </Button>
        </AcceptOrder>
        <RejectOrder>
          <Button size="sm" variant="destructive">
            Reject
          </Button>
        </RejectOrder>
      </OrderAcceptOrRejectRenderer>
    </ColumnActionWrapper>
  );
};

export default OrderColumnActions;
