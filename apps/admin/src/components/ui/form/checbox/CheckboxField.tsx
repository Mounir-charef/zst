import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@mono/ui';
import React from 'react';
import { FormFieldProps } from '../form';
import { Checkbox, CheckboxProps } from './Checkbox';
import { FieldPath, FieldValues } from 'react-hook-form';

type CheckboxFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<FormFieldProps<unknown, TFieldValues, TName>, 'label'> & CheckboxProps;

const CheckboxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  description,
  ...props
}: CheckboxFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox {...props} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CheckboxField;
