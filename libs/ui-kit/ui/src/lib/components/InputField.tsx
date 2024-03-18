'use client';

import { LucideIcon } from 'lucide-react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Input, InputProps } from '../ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { cn } from '@mono/util';

export const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  InputProps,
  label,
  className,
  showErrors = true,
  Icon,
  placeholder,
  ...props
}: {
  control: Control<TFieldValues>;
  showErrors?: boolean;
  name: TName;
  placeholder?: string;
  label?: string;
  className?: string;
  type?: 'text' | 'email';
  Icon?: LucideIcon;
  InputProps?: Omit<InputProps, 'name' | 'type' | 'placeholder'>;
}) => {
  const { className: inputClassName, ...restInputProps } = InputProps || {};
  return (
    <FormField
      {...props}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {!!label && <FormLabel>{label}</FormLabel>}
          <div className="relative flex w-full items-center">
            <FormControl>
              <Input
                {...restInputProps}
                {...field}
                placeholder={placeholder}
                className={cn(
                  {
                    'ring-destructive ring-2': fieldState.error,
                  },
                  inputClassName
                )}
              />
            </FormControl>
            {Icon && (
              <Icon
                className={cn(
                  'absolute end-4 flex h-5 w-5 items-center text-gray-500',
                  {
                    'text-destructive': fieldState.error,
                  }
                )}
              />
            )}
          </div>
          {showErrors && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
