import { LabelProps } from '@radix-ui/react-label';

import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';
import { ReactNode } from 'react';

export const RadioGroupField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  className,
  options,
  showErrors = true,
  placeholder,
  description,
  descriptionProps,
  labelProps,
  required,
  ...props
}: {
  control: Control<TFieldValues>;
  options: {
    label: string;
    value: string;
  }[];
  showErrors?: boolean;
  shouldUnregister?: boolean;
  required?: boolean;
  name: TName;
  placeholder?: string;
  label?: string | JSX.Element;
  description?: string | ReactNode;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  labelProps?: LabelProps;
}) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem className="space-y-3">
          {!!label && <FormLabel {...labelProps}>{label}</FormLabel>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {options.map((option) => (
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          {description ? (
            <FormDescription {...descriptionProps}>
              {description}
            </FormDescription>
          ) : null}
          {showErrors ? <FormMessage /> : null}
        </FormItem>
      )}
    />
  );
};
