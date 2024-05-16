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
import { useFieldArray, useFormContext } from 'react-hook-form';
import { getAllPermutations } from '../../../../../../lib/permutations';
import { NewProduct } from '../page';

const VariationTable = () => {
  const { control, watch, setValue } = useFormContext<NewProduct>();
  const { variants, stock } = watch();
  const { update } = useFieldArray<NewProduct>({
    control,
    name: 'stock',
  });

  const mainVariant = useMemo(() => variants.at(0), [variants]);
  const subVariants = useMemo(() => variants.slice(1), [variants]);

  const defaultValue = useMemo(() => {
    if (!mainVariant) return [];
    let permutations;
    if (subVariants.length > 0) {
      const subVariantsValues = subVariants.map((subVariant) =>
        subVariant.values.map((value) => ({
          name: subVariant.name,
          value,
        })),
      );

      const permutationsWithoutMainVariant =
        getAllPermutations(subVariantsValues);

      permutations = mainVariant.values.flatMap((value) => {
        return permutationsWithoutMainVariant.map((permutation) => [
          { name: mainVariant.name, value },
          ...permutation,
        ]);
      });
    } else {
      permutations = mainVariant.values.map((value) => [
        { name: mainVariant.name, value },
      ]);
    }

    return permutations.map((permutation) => ({
      variantValues: permutation,
      price: 0,
      quantity: 0,
    }));
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
    console.log('resetting stock', defaultValue);
    setValue('stock', defaultValue);
  }, [defaultValue]);

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
        {stock?.map((variantStock, index) => {
          return (
            <Fragment key={index}>
              <TableRow>
                <TableCell>
                  {variantStock.variantValues
                    .map(({ value, name }) => `${name}:${value}`)
                    .join(' - ')}
                </TableCell>
                <TableCell>
                  <InputField
                    control={control}
                    name={`stock.${index}.price`}
                    type="number"
                    InputProps={{
                      onKeyDown: handleKeyDown,
                      inputMode: 'decimal',
                    }}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    control={control}
                    name={`stock.${index}.quantity`}
                    type="number"
                    InputProps={{
                      onKeyDown: handleKeyDown,
                      inputMode: 'decimal',
                    }}
                  />
                </TableCell>
              </TableRow>
            </Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default memo(VariationTable);
