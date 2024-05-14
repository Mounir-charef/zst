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
import { Fragment, memo } from 'react';
import { NewProduct } from '../page';
import { useFormContext } from 'react-hook-form';

const VariationTable = () => {
  const { control, watch } = useFormContext<NewProduct>();
  const variants = watch('variants');
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Variant</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {variants.map((variant, index) => (
          <Fragment key={variant.name + index}>
            <TableRow>
              <TableCell>{variant.name}</TableCell>

              <TableCell>
                <Input
                  value={`${variant.values.map((value) => value.price).join(' - ')}`}
                  disabled
                />
              </TableCell>
              <TableCell>
                <Input
                  value={variant.values.reduce(
                    (acc, value) => acc + value.quantity,
                    0,
                  )}
                  disabled
                />
              </TableCell>
            </TableRow>
            {variant.values.map((value, valueIndex) => (
              <TableRow key={value.name + valueIndex}>
                <TableCell className="p-1 ps-16">{value.name}</TableCell>
                <TableCell className="p-1">
                  <InputField
                    control={control}
                    name={`variants.${index}.values.${valueIndex}.price`}
                    placeholder="Enter price"
                    type="number"
                  />
                </TableCell>
                <TableCell className="p-1">
                  <InputField
                    control={control}
                    name={`variants.${index}.values.${valueIndex}.quantity`}
                    placeholder="Enter quantity"
                    type="number"
                    InputProps={{
                      inputMode: 'decimal',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default memo(VariationTable);
