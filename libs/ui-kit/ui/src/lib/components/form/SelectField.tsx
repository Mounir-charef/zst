'use client';

import {
  SelectContentProps,
  SelectItemProps,
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
} from '@radix-ui/react-select';

import { HTMLAttributes } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { cn } from '@mono/util';

export const SelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  selectProps,
  options,
  className,
  label,
  placeholder,
  description,
  descriptionProps,
  showErrors = true,
  ...props
}: {
  options: { label: string; value: string }[];
  control: Control<TFieldValues>;
  showErrors?: boolean;
  name: TName;
  placeholder?: string;
  label?: string | JSX.Element;
  description?: string | React.ReactNode;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  onChange?: (value: string) => void;
  selectProps?: {
    select?: SelectProps;
    selectTrigger?: SelectTriggerProps & HTMLAttributes<HTMLButtonElement>;
    selectContent?: SelectContentProps & HTMLAttributes<HTMLDivElement>;
    selectValue?: SelectValueProps & HTMLAttributes<HTMLSpanElement>;
    SelectItem?: Omit<SelectItemProps, 'value'> &
      HTMLAttributes<HTMLDivElement>;
  };
}) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem className={className}>
          {!!label && <FormLabel>{label}</FormLabel>}
          <Select
            {...selectProps?.select}
            onValueChange={props?.onChange ?? field.onChange}
            defaultValue={field.value as string}
          >
            <FormControl>
              <SelectTrigger
                {...selectProps?.selectTrigger}
                className={cn(
                  {
                    'text-muted-foreground': !field.value || field.value === '',
                  },
                  selectProps?.selectTrigger?.className,
                )}
              >
                <SelectValue
                  placeholder={placeholder}
                  {...selectProps?.selectValue}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent {...selectProps?.selectContent}>
              <SelectGroup>
                {options?.map((option) => (
                  <SelectItem
                    {...selectProps?.SelectItem}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {description && (
            <FormDescription {...descriptionProps}>
              {description}
            </FormDescription>
          )}
          {showErrors && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
