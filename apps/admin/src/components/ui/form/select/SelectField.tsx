import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@mono/ui';
import React from 'react';
import Select, { SelectProps } from './Select';
import { FormFieldProps } from '../form';
import { cn } from '@mono/util';
import { FieldPath, FieldValues } from 'react-hook-form';

type SelectFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = FormFieldProps<
  Pick<SelectProps, 'options' | 'isMulti'>,
  TFieldValues,
  TName
>;

const SelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  options,
  isMulti,
  formItemClassName,
}: SelectFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(formItemClassName)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Select
              value={field.value}
              onChange={field.onChange}
              options={options}
              isMulti={isMulti}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
