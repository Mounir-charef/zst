
'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { cn } from '@mono/util';
import { Checkbox } from '../ui/checkbox';

export const CheckBoxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  CheckBoxProps,
  label,
  className,
  showErrors = true,
  ...props
}: {
  control: Control<TFieldValues>;
  showErrors?: boolean;
  name: TName;
  label: string | ReactNode;
  className?: string;
  CheckBoxProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem>
          <div
            className={cn('flex flex-row items-center space-y-0', className)}
          >
            <FormControl>
              <Checkbox
                {...field}
                {...CheckBoxProps}
                aria-label={props.name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            {!!label && <FormLabel className="ms-2">{label}</FormLabel>}
          </div>
          {showErrors && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
