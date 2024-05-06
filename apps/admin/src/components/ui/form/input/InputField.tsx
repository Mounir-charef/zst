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

export type InputFieldProps = FormFieldProps<InputProps>;

const InputField = ({
  control,
  name,
  label,
  description,
  formItemClassName,
}: InputFieldProps) => {
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
