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
import { ImageUploaderField } from '../../ImageUploaderField';
import { getAllPermutations } from '../../../lib/permutations';
import { IProductDetails, Stock } from '../../../validation/add-product-schema';

const VariationTable = ({ defaultStock }: { defaultStock?: Stock }) => {
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

  const defaultValue: Stock = useMemo(() => {
    if (!mainVariant) return [];
    if (!subVariants.length) {
      return mainVariant.values.map((value) => ({
        mainVariant: { name: mainVariant.name, value },
        price: 0,
        quantity: 0,
        image: '',
      }));
    }

    const permutations = getAllPermutations(
      subVariants.map((variant) =>
        variant.values.map((value) => ({ name: variant.name, value })),
      ),
    );

    return mainVariant.values.map((value) => ({
      mainVariant: { name: mainVariant.name, value },
      image: '',
      variations: permutations.map((variants) => ({
        variants,
        price: 0,
        quantity: 0,
        image: '',
      })),
    }));
  }, [mainVariant, subVariants]) satisfies Stock;

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
      <TableHeader className="w-full rounded-md [&_tr]:border-b-0">
        <TableRow className="bg-accent rounded-md">
          <TableHead className="text-foreground">Variant</TableHead>
          <TableHead className="text-foreground">Price</TableHead>
          <TableHead className="text-foreground">Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full">
        {stock?.map((mainRow, index) => {
          if ('price' in mainRow) {
            return (
              <TableRow key={mainRow.mainVariant.value}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ImageUploaderField
                      control={control}
                      name={`stock.${index}.image`}
                      className="h-24 w-24"
                    />
                    <span className="font-medium">
                      {mainRow.mainVariant.name} - {mainRow.mainVariant.value}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <InputField
                    control={control}
                    type="number"
                    name={`stock.${index}.price`}
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
                    type="number"
                    name={`stock.${index}.quantity`}
                    InputProps={{
                      onKeyDown: handleKeyDown,
                      inputMode: 'decimal',
                      min: 0,
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          }

          const priceString = mainRow.variations
            .map(({ price }) => price)
            .join(' - ');
          const quantity = mainRow.variations.reduce(
            (acc, { quantity }) => acc + Number(quantity),
            0,
          );
          return (
            <Fragment key={mainRow.mainVariant.value}>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ImageUploaderField
                      control={control}
                      name={`stock.${index}.image`}
                      className="h-24 w-24"
                    />
                    <span className="font-medium">
                      {mainRow.mainVariant.name} - {mainRow.mainVariant.value}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Input className="min-w-24" disabled value={priceString} />
                </TableCell>
                <TableCell>
                  <Input
                    className="min-w-24"
                    type="number"
                    disabled
                    value={quantity}
                  />
                </TableCell>
              </TableRow>
              {mainRow.variations.map((variantStock, subIndex) => {
                const variation = variantStock.variants
                  .map((v) => `${v.name} ${v.value}`)
                  .join(' - ');
                const key = `${mainRow.mainVariant.value}-${variantStock.variants.map((v) => v.value)}`;
                return (
                  <TableRow key={key}>
                    <TableCell
                      className={cn({ 'ps-16': subVariants.length > 0 })}
                    >
                      <div className="flex items-center gap-2">
                        <ImageUploaderField
                          control={control}
                          name={`stock.${index}.variations.${subIndex}.image`}
                          className="h-16 w-16"
                          shouldUnregister
                        />
                        <span className="truncate font-medium">
                          {variation}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <InputField
                        className="min-w-24"
                        control={control}
                        name={`stock.${index}.variations.${subIndex}.price`}
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
                        className="min-w-24"
                        control={control}
                        name={`stock.${index}.variations.${subIndex}.quantity`}
                        type="number"
                        InputProps={{
                          onKeyDown: handleKeyDown,
                          inputMode: 'decimal',
                          min: 0,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default memo(VariationTable);
