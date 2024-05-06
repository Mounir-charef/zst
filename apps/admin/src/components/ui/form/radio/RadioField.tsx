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

type RadioFieldProps = Omit<FormFieldProps<unknown>, 'label'> & RadioProps;

const RadioField = ({
  control,
  name,
  description,
  ...props
}: RadioFieldProps) => {
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
