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

type SelectFieldProps = FormFieldProps<
  Pick<SelectProps, 'options' | 'isMulti'>
>;

const SelectField = ({
  control,
  name,
  label,
  description,
  options,
  isMulti,
}: SelectFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
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
