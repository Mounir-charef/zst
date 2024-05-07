'use client';

import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { cn } from '@mono/util';
import { Textarea, TextareaProps } from '../ui/textarea';

export const TextAreaField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  TextAreaProps,
  label,
  labelProps,
  className,
  placeholder,
  description,
  descriptionProps,
  showErrors = true,
  required,
  ...props
}: {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
  description?: string;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  placeholder?: string;
  showErrors?: boolean;
  TextAreaProps?: Omit<TextareaProps, 'name' | 'placeholder'>;
  shouldUnregister?: boolean;
  required?: boolean;
}) => {
  const { className: TextAreaClassName, ...restTextAreaProps } =
    TextAreaProps || {};
  return (
    <FormField
      {...props}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {!!label && <FormLabel {...labelProps}>{label}</FormLabel>}
          <FormControl>
            <Textarea
              {...restTextAreaProps}
              {...field}
              required={required}
              placeholder={placeholder}
              className={cn(
                {
                  'focus-visible:ring-destructive': fieldState.error,
                },
                TextAreaClassName,
              )}
            />
          </FormControl>
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
