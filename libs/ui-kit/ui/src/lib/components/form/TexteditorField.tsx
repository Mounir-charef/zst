import React from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormFieldProps,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Texteditor } from '../Texteditor';

type TexteditorFieldProps = FormFieldProps<unknown>;

export const TexteditorField = ({
  control,
  name,
  label,
  description,
}: TexteditorFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Texteditor {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
