import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@mono/ui';
import React from 'react';
import Input, { InputProps } from './Input';
import { FormFieldProps } from '../form';
import { cn } from '@mono/util';
import { FieldPath, FieldValues } from 'react-hook-form';

export type InputFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = FormFieldProps<InputProps, TFieldValues, TName>;

const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  formItemClassName,
}: InputFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(formItemClassName)}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
