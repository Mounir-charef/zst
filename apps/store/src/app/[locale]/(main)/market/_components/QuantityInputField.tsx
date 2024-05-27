import { InputHTMLAttributes } from 'react';
import { LabelProps } from '@radix-ui/react-label';

import { LucideIcon, Minus, Plus } from 'lucide-react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import { cn } from '@mono/util';
import {
  FormItem,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  InputProps,
  Input,
  Button,
} from '@mono/ui';

export const QuantityInputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  InputProps,
  label,
  className,
  showErrors = true,
  Icon,
  placeholder,
  description,
  descriptionProps,
  labelProps,
  required,
  ...props
}: {
  control: Control<TFieldValues>;
  showErrors?: boolean;
  shouldUnregister?: boolean;
  required?: boolean;
  name: TName;
  placeholder?: string;
  label?: string | JSX.Element;
  description?: string;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  Icon?: LucideIcon;
  InputProps?: Omit<InputProps, 'name' | 'type' | 'placeholder' | 'required'>;
  labelProps?: LabelProps;
}) => {
  const { className: inputClassName, ...restInputProps } = InputProps || {};
  return (
    <FormField
      {...props}
      render={({ field, fieldState }) => {
        return (
          <FormItem className={cn('', className)}>
            {!!label && <FormLabel {...labelProps}>{label}</FormLabel>}
            <div className="relative flex w-full items-center">
              <FormControl>
                <div className="text-foreground border-y-muted flex w-40 overflow-hidden rounded-full border-y text-center shadow-md">
                  <Button
                    className="bg-background text-foreground hover:bg-background border-muted disabled:text-foreground/50 focus:text-primary flex aspect-square items-center justify-center rounded-full border p-0 focus:border-none focus-visible:ring-0"
                    type="button"
                    disabled={parseInt(field.value) <= 0}
                    onClick={(e) =>
                      field.onChange(
                        (parseInt(field.value) - (!e.shiftKey ? 1 : 10) > 0
                          ? parseInt(field.value) - (!e.shiftKey ? 1 : 10)
                          : 0
                        ).toString(),
                      )
                    }
                  >
                    <Minus className="h-5 w-5 " />
                  </Button>
                  <Input
                    {...field}
                    type={props?.type ?? 'text'}
                    {...restInputProps}
                    placeholder={placeholder}
                    className={cn(
                      {
                        'focus-visible:ring-destructive remove-dft':
                          fieldState.error,
                      },
                      inputClassName,
                    )}
                    onChange={(e) => {
                      field.onChange(e);
                      restInputProps?.onChange?.(e);
                    }}
                    required={required}
                  />
                  <Button
                    className="bg-background text-foreground hover:bg-background border-muted disabled:text-foreground/50 focus:text-primary flex aspect-square items-center justify-center rounded-full border p-0 focus:border-none focus-visible:ring-0"
                    type="button"
                    onClick={(e) =>
                      field.onChange(
                        (
                          parseInt(field.value) + (!e.shiftKey ? 1 : 10)
                        ).toString(),
                      )
                    }
                  >
                    <Plus className="h-5 w-5 " />
                  </Button>
                </div>
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
