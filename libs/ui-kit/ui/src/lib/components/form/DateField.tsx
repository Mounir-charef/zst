'use client';

import {
  PopoverContentProps,
  PopoverProps,
  PopoverTriggerProps,
} from '@radix-ui/react-popover';

import { cn } from '@mono/util';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { LucideProps } from 'lucide-react';
import { HTMLAttributes, ReactNode } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Button } from '../../ui/button';
import { Calendar, CalendarProps } from '../../ui/calendar';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';

export const DateField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  className,
  PopoverProps,
  calendarProps,
  placeholder,
  labelProps,
  label,
  IconProps,
  description,
  descriptionProps,
  showErrors = true,
  ...props
}: {
  control: Control<TFieldValues>;
  name: TName;
  className?: string;
  placeholder?: string;
  shouldUnregister?: boolean;
  showErrors?: boolean;
  PopoverProps?: {
    popover?: PopoverProps;
    popoverContent?: PopoverContentProps & HTMLAttributes<HTMLDivElement>;
    popoverTrigger?: PopoverTriggerProps & HTMLAttributes<HTMLDivElement>;
  };
  calendarProps?: Omit<CalendarProps, 'mode' | 'selected' | 'onSelect'>;
  label?: string;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  description?: string | ReactNode;
  descriptionProps?: HTMLAttributes<HTMLParagraphElement>;
  IconProps?: LucideProps;
}) => {
  const { className: TriggerClassName, ...rest } =
    PopoverProps?.popoverTrigger || {};
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel {...labelProps}>{label}</FormLabel>}
          <Popover {...PopoverProps?.popover}>
            <FormControl>
              <PopoverTrigger asChild {...rest}>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground',
                      TriggerClassName,
                    )}
                  >
                    {field.value ? (
                      format(field.value, 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
            </FormControl>
            <PopoverContent align="start" {...PopoverProps?.popoverContent}>
              <Calendar
                {...calendarProps}
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                defaultMonth={field.value}
                disabled={(date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
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
