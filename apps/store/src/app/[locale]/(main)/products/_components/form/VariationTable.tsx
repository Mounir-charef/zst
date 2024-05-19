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
import { cn } from '@mono/util';
import { Fragment, memo, useCallback, useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ImageUploaderField } from '../../../../../../components/ImageUploaderField';
import { getAllPermutations } from '../../../../../../lib/permutations';
import { IProductDetails } from '../../types';

const VariationTable = ({
  defaultStock,
}: {
  defaultStock?: IProductDetails['stock'];
}) => {
  const { control, watch, setValue, formState } =
    useFormContext<IProductDetails>();
  const { variants, stock } = watch();
  const { variants: dirtyVariants } = formState.dirtyFields;

  const isVariantsDirty = useMemo(() => {
    return dirtyVariants?.some(({ name, values }) => {
      return name || values?.some((value) => value);
    });
  }, [dirtyVariants]);

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
    if (isVariantsDirty || !defaultStock) {
      setValue('stock', defaultValue, {
        shouldDirty: true,
      });
    } else {
      setValue('stock', defaultStock, {
        shouldDirty: false,
      });
    }
  }, [defaultValue, isVariantsDirty, defaultStock]);

  return (
    <Table>
      <TableHeader className="rounded-md [&_tr]:border-b-0">
        <TableRow className="bg-accent rounded-md">
          <TableHead className="text-foreground">Variant</TableHead>
          <TableHead className="text-foreground">Price</TableHead>
          <TableHead className="text-foreground">Quantity</TableHead>
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
