'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Label } from '@mono/ui';
import { memo, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSuspenseAuthQuery } from '../../../../../hooks/useAuthQuery';
import { ColorVariant } from '../../products/types';
import { getOffer } from '../_data/getData';
import { ColorVariants as DEFAULTS } from '../_data/offers';
import HoverDetails from './HoverDetails';
import OrderDetailCard from './OrderDetailCard';
import OrderSheetFooter from './OrderSheetFooter';
import { QuantityInputField } from './QuantityInputField';
import VariationSelect from './VariationSelect';

interface OrderContentProps {
  id: string;
}
const OrderContent = ({ id }: OrderContentProps) => {
  const { data } = useSuspenseAuthQuery(['offer', id], () => {
    return getOffer(id);
  });
  const SizeSchema = z.object({
    size: z.string(),
    quantity: z.string(),
    price: z.string(),
  });
  const variationSchema = useMemo(
    () =>
      z.object({
        color: z.string(),
        name: z.string(),
        sizes: z.array(SizeSchema),
      }),
    [],
  );
  const orderDetailsSchema = z.array(variationSchema).default(DEFAULTS);
  type formType = z.infer<typeof orderDetailsSchema>;
  const form = useForm<formType>({
    defaultValues: { ...DEFAULTS },
    // resolver: zodResolver(orderDetailsSchema),
  });
  const variants = Object.values(form.watch());
  const [selectedVariant, setSelectedVariant] = useState<ColorVariant>(
    variants[0],
  );
  const onSubmit: SubmitHandler<formType> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      console.log(error);
      form.setError('root', { message: 'An error occurred' });
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-2 px-6">
          <Label>1. Product details</Label>
          {data && <OrderDetailCard data={data} />}
          <div className="mt-4 flex flex-col gap-4">
            <Label>
              2. Color : ({variants.length}) {selectedVariant?.name}
            </Label>
            <div className="flex gap-2">
              {variants.map((variant, i) => (
                <VariationSelect
                  quantity={variant.sizes.reduce(
                    (acc, curr) => acc + parseInt(curr.quantity),
                    0,
                  )}
                  key={i}
                  selected={selectedVariant === variant}
                  color={variant?.color ?? '#000000'}
                  props={{
                    onClick: () => setSelectedVariant(variant),
                  }}
                />
              ))}
            </div>
            <div>
              <div className=" flex w-full flex-col gap-4">
                <Label>3. Size </Label>
                {variants.map(
                  (variant, index) =>
                    variant.name === selectedVariant?.name && (
                      <div key={index}>
                        <ul className="flex w-full flex-col gap-3">
                          {variant.sizes.map((size, i) => (
                            <li className="flex justify-between" key={i}>
                              <span className="text-muted-foreground flex items-center gap-1">
                                Size {size.size}
                              </span>
                              <span className="text-muted-foreground flex items-center gap-1 ">
                                {size.price}$
                                <HoverDetails>
                                  <span></span>
                                </HoverDetails>
                              </span>
                              <span>
                                <QuantityInputField
                                  InputProps={{
                                    min: 0,
                                    className:
                                      'hide-arrow text-center p-0 flex justify-center items-center border-none disabled:border-none rounded-none focus-visible:ring-0 appearance-none',
                                  }}
                                  showErrors={false}
                                  type="number"
                                  control={form.control}
                                  name={`${index}.sizes.${i}.quantity`}
                                />
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                )}
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <OrderSheetFooter
          isLoading={form.formState.isSubmitting}
          id={id}
          orderDetails={{
            items: {
              variations: variants.length,
              quantity: variants.reduce((total, entry) => {
                entry.sizes.forEach((size) => {
                  total += parseInt(size.quantity);
                });
                return total;
              }, 0),
            },
            fees: {
              subtotal: variants.reduce((total, entry) => {
                entry.sizes.forEach((size) => {
                  total += parseFloat(size.quantity) * parseFloat(size.price);
                });
                return total;
              }, 0),
              taxes: 0,
              payment: 0,
            },
          }}
        />
      </form>
    </Form>
  );
};

export default memo(OrderContent);
