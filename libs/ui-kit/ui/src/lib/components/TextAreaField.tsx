
'use client';

import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { cn } from '@mono/util';
import { Textarea, TextareaProps } from '../ui/textarea';

export const TextAreaField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  TextAreaProps,
  label,
  className,
  placeholder,
  ...props
}: {
  control: Control<TFieldValues>;
  name: TName;
  label?: string;
  className?: string;
  placeholder?: string;
  TextAreaProps?: Omit<TextareaProps, 'name' | 'placeholder'>;
}) => {
  const { className: TextAreaClassName, ...restTextAreaProps } =
    TextAreaProps || {};
  return (
    <FormField
      {...props}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {!!label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              {...restTextAreaProps}
              {...field}
              placeholder={placeholder}
              className={cn(
                {
                  'focus-visible:ring-destructive': fieldState.error,
                },
                TextAreaClassName,
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
