'use client';

import {
  Input,
  InputField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@mono/ui';
import { Fragment, memo, useCallback, useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { getAllPermutations } from '../../../../../../lib/permutations';
import { NewProduct } from '../page';

const VariationTable = () => {
  const { control, watch, resetField } = useFormContext<NewProduct>();
  const { variants, stock } = watch();

  const mainVariant = useMemo(() => variants.at(0), [variants]);
  const subVariants = useMemo(() => variants.slice(1), [variants]);
  const defaultValues = useMemo(() => {
    if (subVariants.length === 0) return [];

    return mainVariant?.values.map((VariantValue) => {
      const subVariantsValues = subVariants.map(
        (subVariant) => subVariant.values,
      );

      if (subVariantsValues.length === 1) {
        return {
          variantValue: VariantValue,
          subvariants: subVariantsValues[0].map((subVariantValue) => ({
            variants: {
              [subVariants[0].name]: subVariantValue,
            },
            price: 0,
            quantity: 0,
          })),
        };
      }

      const subVariantsValuesWithNames = subVariantsValues.map(
        (values, index) =>
          values.map((value) => ({ [subVariants[index].name]: value })),
      );
      const allSubVariantsPermutations = getAllPermutations(
        subVariantsValuesWithNames,
      );

      return {
        variantValue: VariantValue,
        subvariants: allSubVariantsPermutations.map((subVariantValues) => ({
          variants: subVariantValues.reduce(
            (acc, value) => ({ ...acc, ...value }),
            {},
          ),
          price: 0,
          quantity: 0,
        })),
      };
    });
  }, [mainVariant, subVariants]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    },
    [],
  );

  useEffect(() => {
    resetField('stock', {
      defaultValue: defaultValues,
    });
  }, [defaultValues]);

  console.log(stock);
  return (
    <Table>
      <TableHeader className="rounded-md [&_tr]:border-b-0">
        <TableRow className="bg-accent rounded-md">
          <TableHead>Variant</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {defaultValues?.map((variantStock, index) => {
          const realTimeStock = stock.at(index);
          const pricesString = realTimeStock?.subvariants
            .map((variant) => variant.price)
            .join(' - ');

          const fullQuantity = realTimeStock?.subvariants.reduce(
            (acc, variant) => Number(acc) + Number(variant.quantity),
            0,
          );
          return (
            <Fragment key={index}>
              <TableRow>
                <TableCell>{variantStock.variantValue}</TableCell>
                <TableCell>
                  <Input
                    value={pricesString}
                    disabled
                    className="disabled:opacity-70"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={fullQuantity}
                    disabled
                    className="disabled:opacity-70"
                  />
                </TableCell>
              </TableRow>
              {variantStock.subvariants.map((subVariant, subIndex) => (
                <TableRow key={subIndex}>
                  <TableCell className="py-1 ps-12">
                    {Object.entries(subVariant.variants)
                      .map(([key, value]) => `${key}: ${value}`)
                      .join(' - ')}
                  </TableCell>
                  <TableCell className="py-1">
                    <InputField
                      control={control}
                      name={`stock.${index}.subvariants.${subIndex}.price`}
                      type="number"
                      InputProps={{
                        inputMode: 'decimal',
                        onKeyDown: handleKeyDown,
                        min: 0,
                      }}
                    />
                  </TableCell>
                  <TableCell className="py-1">
                    <InputField
                      control={control}
                      name={`stock.${index}.subvariants.${subIndex}.quantity`}
                      type="number"
                      InputProps={{
                        inputMode: 'decimal',
                        onKeyDown: handleKeyDown,
                        min: 0,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default memo(VariationTable);
