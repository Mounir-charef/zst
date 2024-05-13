import { LabelProps } from '@radix-ui/react-label';

import { cn } from '@mono/util';
import { LucideIcon } from 'lucide-react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Switch } from '../ui/switch';

export const SwitchField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  className,
  showErrors = true,
  Icon,
  description,
  descriptionProps,
  labelProps,
  required,
  labelDirection = 'start',
  ...props
}: {
  control: Control<TFieldValues>;
  showErrors?: boolean;
  shouldUnregister?: boolean;
  required?: boolean;
  name: TName;
  label?: string | JSX.Element;
  description?: string;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  Icon?: LucideIcon;
  labelProps?: LabelProps;
  labelDirection?: 'start' | 'end';
}) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem
          className={cn(
            'flex flex-row items-center gap-4 space-y-0',
            className,
          )}
        >
          {labelDirection === 'start' && (
            <div className="space-y-0.5">
              {!!label && <FormLabel {...labelProps}>{label}</FormLabel>}
              {description && (
                <FormDescription {...descriptionProps}>
                  {description}
                </FormDescription>
              )}
              {showErrors && <FormMessage />}
            </div>
          )}
          <FormControl>
            <Switch
              required={required}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          {labelDirection === 'end' && (
            <div className="space-y-0.5">
              {!!label && <FormLabel {...labelProps}>{label}</FormLabel>}
              {description && (
                <FormDescription {...descriptionProps}>
                  {description}
                </FormDescription>
              )}
              {showErrors && <FormMessage />}
            </div>
          )}
        </FormItem>
      )}
    />
  );
};
