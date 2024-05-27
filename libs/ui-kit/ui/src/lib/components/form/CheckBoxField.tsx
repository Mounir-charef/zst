'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { cn } from '@mono/util';
import { Checkbox } from '../../ui/checkbox';
import { LabelProps } from '@radix-ui/react-label';

export const CheckBoxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  CheckBoxProps,
  label,
  labelProps,
  description,
  descriptionProps,
  className,
  showErrors,
  ...props
}: {
  control: Control<TFieldValues>;
  shouldUnregister?: boolean;
  showErrors?: boolean;
  name: TName;
  label: string | ReactNode;
  labelProps?: LabelProps;
  description?: string | ReactNode;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  CheckBoxProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem
          className={cn(
            'flex flex-row items-start space-x-3 space-y-0',
            className,
          )}
        >
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel {...labelProps}>{label}</FormLabel>
            <FormDescription {...descriptionProps}>
              {description}
            </FormDescription>
          </div>
          {showErrors && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
