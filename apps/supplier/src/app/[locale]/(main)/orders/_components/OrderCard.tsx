'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  Separator,
  TextAreaField,
  Textarea,
} from '@mono/ui';
import { format } from 'date-fns';
import {
  CheckCheckIcon,
  CheckIcon,
  Copy,
  Loader2,
  ShoppingBag,
  XIcon,
} from 'lucide-react';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useGetOrder } from '../../../../../hooks/orders/useGetOrder';
import { Order } from '../../../../../validation/order-schema';
import AcceptOrderButton from './AcceptOrderButton';
import { renderStatus } from './Columns';
import { useOrderContext } from './OrderProvider';
import RejectOrderButton from './RejectOrderButton';
import { useDeliverOrder } from '../../../../../hooks/orders/useDeliverOrder';

const deliverFormSchema = z.object({
  Id: z.string().or(z.number()),
  adminNote: z.string(),
});

type DeliverFormValues = z.infer<typeof deliverFormSchema>;

const DeliverForm = memo(({ orderId }: { orderId: string | number }) => {
  const { mutate } = useDeliverOrder(orderId);
  const form = useForm<DeliverFormValues>({
    resolver: zodResolver(deliverFormSchema),
    defaultValues: {
      Id: orderId,
      adminNote: '',
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutate();
  });
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={onSubmit}>
        <TextAreaField
          control={form.control}
          name="adminNote"
          label="Admin Note"
          placeholder="Add a note for the admin"
          TextAreaProps={{
            className: 'h-24 resize-none',
          }}
        />
        <Button
          className="w-full items-center gap-2"
          type="submit"
          variant="success"
        >
          <CheckCheckIcon className="size-6" /> Mark as delivered
        </Button>
      </form>
    </Form>
  );
});

function renderActionByStatus(order: Order) {
  switch (order.status) {
    case 'pending':
      return null;
    case 'delivered':
      return (
        <>
          <Separator />
          <Textarea
            disabled
            defaultValue="try to do this and this and ship it to there also we need that and that and some of that"
            className="h-24 resize-none disabled:opacity-100"
          />
        </>
      );
    case 'in_review':
      return (
        <>
          <Separator />
          <div className="flex w-full items-center gap-2">
            <AcceptOrderButton orderId={order.id}>
              <Button className="flex-1 gap-1" variant="success">
                <CheckIcon className="h-4 w-4" /> Accept
              </Button>
            </AcceptOrderButton>

            <RejectOrderButton orderId={order.id}>
              <Button
                className="text-destructive hover:text-destructive flex-1 gap-1"
                variant="outline"
              >
                <XIcon className="h-4 w-4" /> Decline
              </Button>
            </RejectOrderButton>
          </div>
        </>
      );

    case 'active':
      return (
        <>
          <Separator />
          <DeliverForm orderId={order.id} />
        </>
      );

    default:
      return null;
  }
}

const OrderCard = () => {
  const { selectedOrderId } = useOrderContext();
  const { data: order, isLoading } = useGetOrder(selectedOrderId);

  if (isLoading) {
    return (
      <Card className="h-fit">
        <CardHeader>
          <CardTitle>Loading Order...</CardTitle>
          <CardDescription>
            Please wait while we load the order details.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex h-80 items-center justify-center p-6">
          <Loader2 className="text-primary size-8 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  if (!order) {
    return (
      <Card className="h-fit">
        <CardHeader>
          <CardTitle>Select an Order</CardTitle>
          <CardDescription>
            Please select an order from the list to view its details.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex h-80 items-center justify-center p-6">
          <ShoppingBag className="text-muted-foreground h-12 w-12" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-fit">
      <CardHeader className="bg-muted/50 flex flex-row items-start">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Order #{order.id}
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => navigator.clipboard.writeText(order.id.toString())}
            >
              <Copy className="h-3 w-3" />
              <span className="sr-only">Copy Order ID</span>
            </Button>
          </CardTitle>
          <CardDescription>
            Date: {format(new Date(order.date), 'MMMM dd, yyyy')}
          </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          {renderStatus(order.status)}
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Order Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Glimmer Lamps x <span>2</span>
              </span>
              <span>$250.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Aqua Filters x <span>1</span>
              </span>
              <span>$49.00</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$299.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>$5.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>$25.00</span>
            </li>
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>$329.00</span>
            </li>
          </ul>
          {renderActionByStatus(order)}
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 flex flex-row items-center border-t px-6 py-3">
        <div className="text-muted-foreground flex-1 text-center text-xs">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
        {/* <Pagination className="ml-auto mr-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="sr-only">Previous Order</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="sr-only">Next Order</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination> */}
      </CardFooter>
    </Card>
  );
};

export default memo(OrderCard);
