'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, Label } from '@mono/ui';
import { memo, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSuspenseAuthQuery } from '../../../../../hooks/useAuthQuery';
import { ColorVariant } from '../../products/types';
import { getOffer } from '../_data/getData';
import { ColorVariants as DEFAULTS } from '../_data/offers';
import OrderDetailCard from './OrderDetailCard';
import { QuantityInputField } from './QuantityInputField';
import VariationSelect from './VariationSelect';
import HoverDetails from './HoverDetails';

interface OrderContentProps {
  id: string;
}
const OrderContent = ({ id }: OrderContentProps) => {
  const { data } = useSuspenseAuthQuery(['offer', id], () => {
    return getOffer(id);
  });
  const [selectedVariant, setSelectedVariant] = useState<number>(0);
  const orderDetailsSchema = useMemo(
    () =>
      z.array(
        z.object({
          color: z.string(),
          name: z.string(),
          sizes: z.array(
            z.object({
              size: z.string(),
              price: z.string(),
              quantity: z.string(),
            }),
          ),
        }),
      ),
    [],
  );
  const form = useForm<ColorVariant[]>({
    resolver: zodResolver(orderDetailsSchema),
    defaultValues: { ...DEFAULTS },
  });
  const variants = Object.values(form.watch());
  console.log(variants);
  const onSubmit: SubmitHandler<ColorVariant[]> = async (data) => {
    console.log(data);
  };
  return (
    <div className="px-6">
      <div className="space-y-2">
        <Label>1. Product details</Label>
        {data && <OrderDetailCard data={data} />}
        <div className="mt-4 flex flex-col gap-4">
          <Label>Color : {variants.length}</Label>
          <div className="flex gap-2">
            {variants.map((variant, i) => (
              <VariationSelect
                key={i}
                selected={selectedVariant === i}
                color={variant.color}
                props={{
                  onClick: () => setSelectedVariant(i),
                }}
              />
            ))}
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className=" flex w-full flex-col gap-4">
                <Label>2. Size</Label>
                {variants.map(
                  (variant, index) =>
                    index === selectedVariant && (
                      <div key={index}>
                        <ul className="flex w-full flex-col gap-3">
                          {variant.sizes.map((size, i) => (
                            <li className="flex justify-between" key={i}>
                              <span className="text-muted-foreground flex items-center gap-1">
                                Size {size.size}
                              </span>
                              <span className="text-muted-foreground flex items-center gap-1">
                                {size.price}
                                <HoverDetails>
                                  <span></span>
                                </HoverDetails>
                              </span>
                              <span>
                                <QuantityInputField
                                  InputProps={{
                                    min: 0,
                                    max: 100,
                                    disabled: true,
                                    className:
                                      'text-center p-0 flex w-32 justify-center items-center rounded-none border border-foreground',
                                  }}
                                  showErrors
                                  type="number"
                                  control={form.control}
                                  name={`${index}.sizes.${i}.quantity`}
                                />
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div>
                          {Object.keys(form.formState.errors).some(
                            (err) => err,
                          ) && (
                            <ul className="mt-2 rounded-md bg-red-300 p-2 md:p-5 lg:w-fit">
                              {Object.entries(form.formState.errors).map(
                                ([key, error]) => {
                                  return (
                                    error && (
                                      <li key={key} className="text-red-500">
                                        -{' '}
                                        {error.message
                                          ? error.message
                                          : (
                                              error as Record<
                                                string,
                                                Partial<{
                                                  type: string | number;
                                                  message: string;
                                                }>
                                              >
                                            )[Object.keys(error)[0]].message}
                                      </li>
                                    )
                                  );
                                },
                              )}
                            </ul>
                          )}
                        </div>
                      </div>
                    ),
                )}
              </div>
              {/* <Button type="submit">Submit</Button> */}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderContent);
