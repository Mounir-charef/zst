import React from 'react';
import { ID } from '../../../../../../types/common';
import { Button, Label, SheetFooter } from '@mono/ui';
import AcceptOrder from '../actions/AcceptOrder';
import RejectOrder from '../actions/RefuseOrder';
import SheetFooterMetaWrapper from '../../../../../../components/sheet/SheetFooterMetaWrapper';
import SheetFooterMetaItem from '../../../../../../components/sheet/SheetFooterMetaItem';
import OrderDetailsProduct from './OrderDetailsProduct';
import products from '../../../../../../data/products';
import orders from '../../../../../../data/orders';
import { findOne } from '../../../../../../apis/_api-mock-helper';
import OrderAcceptOrRejectRenderer from '../../../../../../components/orders/OrderAcceptOrRejectRenderer';
import { TypedOrderListing } from '../../../../../../types/order';

interface OrderDetailsProps {
  id: ID;
}

const OrderDetails = ({ id }: OrderDetailsProps) => {
  const order = findOne<TypedOrderListing>(orders, id);
  return (
    <div>
      <div className="px-6">
        <Label className="mb-1">Product details</Label>
        <OrderDetailsProduct
          image={products[0].image}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          quantity={100}
          price={2}
        />
      </div>

      <div className="mt-6 border-t p-6">
        <SheetFooterMetaWrapper>
          <SheetFooterMetaItem title="Subtotal" value={'$200'} />
          <SheetFooterMetaItem title="Shipping" value={'$50'} />
          <SheetFooterMetaItem title="Tax" value={'$40'} />
          <SheetFooterMetaItem
            title="Total"
            value={<span className="font-bold">$290</span>}
          />
        </SheetFooterMetaWrapper>
        <OrderAcceptOrRejectRenderer status={order?.status || ''}>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <AcceptOrder>
              <Button variant={'success'}>Accept</Button>
            </AcceptOrder>
            <RejectOrder>
              <Button variant={'destructive'}>Reject</Button>
            </RejectOrder>
          </div>
        </OrderAcceptOrRejectRenderer>
      </div>
    </div>
  );
};

export default OrderDetails;
