import React from 'react';
import { Textarea, TextareaProps } from './Textarea';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@mono/ui';
import { FormFieldProps } from '../form';

type TextareaFieldProps = FormFieldProps<TextareaProps>;

const TextareaField = ({
  control,
  label,
  name,
  description,
  ...props
}: TextareaFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea {...props} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextareaField;
