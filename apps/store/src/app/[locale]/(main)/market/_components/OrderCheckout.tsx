'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, InputField, Label, PhoneInputField } from '@mono/ui';
import { ArrowRightCircle, XIcon } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { offers } from '../_data/offers';
import ContentCard from './ContentCard';
import HoverDetails from './HoverDetails';
import OrderDetailCard from './OrderDetailCard';
import { QuantityInputField } from './QuantityInputField';
import ReturnToMarket from './ReturnToMarket';
import VariationSelect from './VariationSelect';
interface OrderCheckoutProps {
  id: string;
}

const OrderCheckout = ({ id }: OrderCheckoutProps) => {
  const personalInfoSchema = z.object({
    firstName: z.string().min(4).max(255),
    lastName: z.string().min(4).max(255),
    phoneNumber: z.string().min(8).max(255),
    address: z.string().min(8).max(255),
  });
  const orderDetailsSchema = z.object({
    quantity: z.string().refine((val) => parseFloat(val) >= 0, {
      message: 'Must have at least 1 item',
    }),
    color: z.string(),
    variant: z.string(),
    size: z.string(),
    price: z.string(),
  });
  const orderSchema = z.object({
    personalInfo: personalInfoSchema,
    orderDetails: z.array(orderDetailsSchema),
  });
  type OrderType = z.infer<typeof orderSchema>;
  const form = useForm<OrderType>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      personalInfo: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
      },
      orderDetails: [
        {
          quantity: '300',
          color: '#FFF',
          variant: 'Black',
          size: 'M',
          price: '16.66',
        },
        {
          quantity: '15',
          color: '#FF0000',
          variant: 'Red',
          size: 'M',
          price: '16.66',
        },
      ],
    },
  });

  const details = form.watch();

  const onSubmit: SubmitHandler<OrderType> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      form.setError('root', { message: 'An error occurred' });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <ReturnToMarket />
        <ContentCard
          header={{
            title: 'Product details',
            description:
              'Specify your purchase details and let the supplier know you requirements.',
            children: offers && <OrderDetailCard data={offers[0]} />,
          }}
        >
          <>
            <div className="flex flex-col">
              <div className="flex justify-between text-xl font-semibold">
                <h3>Total 400 Pieces</h3>
                <h3>Subtotal : $400.80</h3>
              </div>
            </div>
            <ul className="flex flex-col flex-wrap gap-4">
              {Object.values(details.orderDetails).map((variant, i) => (
                <li
                  key={i}
                  className="bg-foreground/5 relative grid w-full grid-cols-1 items-center  justify-between gap-2 rounded-md px-6 py-10 md:grid-cols-4 md:py-6"
                >
                  <span className="flexCenter gap-2 md:justify-start">
                    <VariationSelect
                      quantity={0}
                      color={variant.color}
                      props={{
                        disabled: true,
                      }}
                    />
                    <span className="text-muted-foreground">
                      {variant.variant},{variant.size}
                    </span>
                  </span>
                  <span className="flexCenter w-full gap-2 ">
                    <span className="truncate text-ellipsis">
                      {variant.price} / Piece
                    </span>
                    <HoverDetails>
                      <></>
                    </HoverDetails>
                  </span>
                  <span className="flexCenter w-full">
                    <QuantityInputField
                      control={form.control}
                      name={`orderDetails.${i}.quantity`}
                      InputProps={{
                        min: 1,
                        className:
                          'hide-arrow text-center p-0 flex justify-center items-center border-none disabled:border-none rounded-none focus-visible:ring-0 appearance-none',
                      }}
                      showErrors={false}
                      type="number"
                    />
                  </span>
                  <span className="flexCenter w-full gap-2">
                    USD{' '}
                    {(
                      parseFloat(variant.price) * parseFloat(variant.quantity)
                    ).toFixed(2)}
                  </span>
                  <div className=" absolute end-6 top-2 md:top-auto">
                    <Button
                      type="button"
                      className="text-foreground bg-transparent p-0 hover:bg-transparent"
                      onClick={() =>
                        form.setValue(
                          `orderDetails`,
                          details.orderDetails.filter(
                            (_, index) => index !== i,
                          ),
                        )
                      }
                    >
                      <XIcon size={16} />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        </ContentCard>
        <ContentCard
          header={{
            title: 'Personal info',
            description:
              "We'll contact you to confirme order and details with you",
          }}
        >
          <div className="md: grid grid-cols-2 gap-4 md:w-4/6">
            <div className="flex flex-col gap-2">
              <Label>First Name</Label>
              <InputField
                placeholder={'First name'}
                control={form.control}
                name="personalInfo.firstName"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Last Name</Label>
              <InputField
                placeholder={'Last name'}
                control={form.control}
                name="personalInfo.lastName"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <Label>Phone Number</Label>
              <PhoneInputField
                placeholder={'Phone number'}
                PhoneInputProps={{ className: 'w-full' }}
                control={form.control}
                name="personalInfo.phoneNumber"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <Label>Address</Label>
              <InputField
                placeholder={'Phone number'}
                control={form.control}
                name="personalInfo.address"
              />
            </div>
          </div>
        </ContentCard>
        <ContentCard
          header={{
            children: (
              <Button className="items-center gap-2">
                Submit order request
                <ArrowRightCircle />
              </Button>
            ),
          }}
        />
      </form>
    </Form>
  );
};

export default OrderCheckout;
