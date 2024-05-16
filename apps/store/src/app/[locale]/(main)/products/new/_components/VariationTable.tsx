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
import { ImageUploaderField } from '../../../../../../components/ImageUploaderField';
import { cn } from '@mono/util';
import { join } from 'path';

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
      image: undefined,
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
    setValue('stock', defaultValue, {
      shouldDirty: true,
    });
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
              {subVariants.length > 0 &&
              (index < 1 ||
                variantStock.variantValues[0].value !==
                  stock[index - 1].variantValues[0].value) ? (
                // Main variant header
                <TableRow>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <ImageUploaderField
                        control={control}
                        name={`stock.${index}.image`}
                        className="h-24 w-24"
                        shouldUnregister
                      />
                      <span className="font-medium">
                        {variantStock.variantValues[0].name} -{' '}
                        {variantStock.variantValues[0].value}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input
                      disabled
                      value={stock
                        .filter(
                          (s) =>
                            s.variantValues[0].value ===
                            variantStock.variantValues[0].value,
                        )
                        .map(({ price }) => price)
                        .join(' - ')}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      disabled
                      value={stock
                        .filter(
                          (s) =>
                            s.variantValues[0].value ===
                            variantStock.variantValues[0].value,
                        )
                        .reduce(
                          (acc, { quantity }) => acc + Number(quantity),
                          0,
                        )}
                    />
                  </TableCell>
                </TableRow>
              ) : null}

              {/* stock values */}
              <TableRow className="py-1">
                <TableCell
                  className={cn({
                    'ps-16': subVariants.length > 0,
                  })}
                >
                  <div className="flex items-center gap-2">
                    <ImageUploaderField
                      control={control}
                      name={`stock.${index}.image`}
                      className="h-16 w-16"
                      shouldUnregister
                    />
                    <span className="truncate font-medium">
                      {variantStock.variantValues
                        .slice(1)
                        .map(({ value, name }) => `${name} ${value}`)
                        .join(' - ')}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <InputField
                    control={control}
                    name={`stock.${index}.price`}
                    type="number"
                    InputProps={{
                      onKeyDown: handleKeyDown,
                      inputMode: 'decimal',
                      min: 0,
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
                      min: 0,
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
