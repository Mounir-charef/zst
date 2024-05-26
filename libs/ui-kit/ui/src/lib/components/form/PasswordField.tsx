'use client';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';

import { Eye, EyeOff, LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Input, InputProps } from '../../ui/input';
import { cn } from '@mono/util';

export const PasswordField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  InputProps,
  label,
  className,
  showErrors = true,
  Icon,
  placeholder,
  required,
  ...props
}: {
  control: Control<TFieldValues>;
  showErrors?: boolean;
  name: TName;
  label?: string;
  className?: string;
  Icon?: LucideIcon;
  placeholder?: string;
  required?: boolean;
  InputProps?: Omit<InputProps, 'name' | 'type' | 'placeholder' | 'required'>;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const type = showPassword ? 'text' : 'password';
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { className: inputClassName, ...restInputProps } = InputProps || {};
  return (
    <FormField
      {...props}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {!!label && <FormLabel>{label}</FormLabel>}
          <div className="relative flex h-full w-full items-center">
            <FormControl>
              <Input
                {...restInputProps}
                {...field}
                placeholder={placeholder}
                type={type}
                required={required}
                className={cn(
                  {
                    'ring-destructive ring-2': fieldState.error,
                  },
                  inputClassName,
                )}
              />
            </FormControl>
            {Icon ? (
              <Icon
                className={cn(
                  'absolute end-4 flex h-5 w-5 items-center text-gray-500',
                  {
                    'text-destructive': fieldState.error,
                  },
                )}
              />
            ) : (
              <button
                type="button"
                onClick={handleShowPassword}
                className={cn(
                  'absolute end-4 flex h-5 w-5 items-center text-gray-500',
                  {
                    'text-destructive': fieldState.error,
                  },
                )}
              >
                {showPassword ? (
                  <EyeOff
                    className={cn('h-5 w-5 text-gray-500', {
                      'text-destructive': fieldState.error,
                    })}
                  />
                ) : (
                  <Eye
                    className={cn('h-5 w-5 text-gray-500', {
                      'text-destructive': fieldState.error,
                    })}
                  />
                )}
              </button>
            )}
          </div>
          {showErrors && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
