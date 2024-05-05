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

type CheckboxFieldProps = Omit<FormFieldProps<unknown>, 'label'> &
  CheckboxProps;

const CheckboxField = ({
  control,
  name,
  description,
  ...props
}: CheckboxFieldProps) => {
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
