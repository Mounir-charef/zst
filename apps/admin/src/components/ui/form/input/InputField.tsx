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
import { Control } from 'react-hook-form';
import { FormFieldProps } from '../form';

export type InputFieldProps = FormFieldProps<InputProps>;

const InputField = ({ control, name, label, description }: InputFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
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
