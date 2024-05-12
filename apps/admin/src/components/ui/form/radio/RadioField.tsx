import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@mono/ui';
import React from 'react';
import { FormFieldProps } from '../form';
import Radio, { RadioProps } from './Radio';
import { FieldPath, FieldValues } from 'react-hook-form';

type RadioFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<FormFieldProps<unknown, TFieldValues, TName>, 'label'> & RadioProps;

const RadioField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  description,
  ...props
}: RadioFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        console.log({ value: field.value });
        return (
          <FormItem>
            <FormControl>
              <Radio
                {...props}
                {...field}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default RadioField;
