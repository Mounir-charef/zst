'use client';

import { LabelProps } from '@radix-ui/react-label';

import { LucideIcon } from 'lucide-react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { PhoneInput, type PhoneInputProps } from '../../ui/phone-input';

export const PhoneInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  className,
  showErrors = true,
  Icon,
  placeholder,
  description,
  descriptionProps,
  labelProps,
  required,
  PhoneInputProps,
  ...props
}: {
  control: Control<TFieldValues>;
  showErrors?: boolean;
  shouldUnregister?: boolean;
  required?: boolean;
  name: TName;
  placeholder?: string;
  label?: string | JSX.Element;
  description?: string | ReactNode;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  Icon?: LucideIcon;
  labelProps?: LabelProps;
  PhoneInputProps?: PhoneInputProps;
}) => {
  return (
    <FormField
      {...props}
      render={({ field }) => {
        return (
          <FormItem className={className}>
            {!!label && <FormLabel {...labelProps}>{label}</FormLabel>}
            <div className="relative flex w-full items-center">
              <FormControl>
                <PhoneInput
                  {...field}
                  placeholder={placeholder}
                  required={required}
                  {...PhoneInputProps}
                />
              </FormControl>

              {Icon && (
                <Icon className="absolute end-4 flex h-5 w-5 items-center text-gray-500" />
              )}
            </div>
            {description && (
              <FormDescription {...descriptionProps}>
                {description}
              </FormDescription>
            )}
            {showErrors && <FormMessage />}
          </FormItem>
        );
      }}
    />
  );
};
