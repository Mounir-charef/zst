'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@mono/ui';
import { Fragment, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { NewProduct } from '../page';

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

              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
            {variant.values.map((value) => (
              <TableRow key={value}>
                <TableCell className="p-1 ps-16">{value}</TableCell>
                <TableCell className="p-1"></TableCell>
                <TableCell className="p-1"></TableCell>
              </TableRow>
            ))}
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default memo(VariationTable);
