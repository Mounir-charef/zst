'use client';

import {
  PopoverContentProps,
  PopoverProps,
  PopoverTriggerProps,
} from '@radix-ui/react-popover';
import { format } from 'date-fns';
import { ChevronDown, LucideIcon, LucideProps } from 'lucide-react';
import { HTMLAttributes } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import { cn } from '@mono/util';
import { Calendar, CalendarProps } from '../../ui/calendar';

export const DateRangeField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  className,
  PopoverProps,
  calendarProps,
  placeholder,
  IconProps,
  labelProps,
  Icon,
  ...props
}: {
  control: Control<TFieldValues>;
  Icon?: LucideIcon;
  name: TName;
  className?: string;
  placeholder?: string;
  shouldUnregister?: boolean;
  label?: string;
  labelProps?: HTMLAttributes<HTMLLabelElement>;
  PopoverProps?: {
    popover?: PopoverProps;
    popoverContent?: PopoverContentProps & HTMLAttributes<HTMLDivElement>;
    popoverTrigger?: PopoverTriggerProps & HTMLAttributes<HTMLDivElement>;
  };
  calendarProps?: Omit<CalendarProps, 'mode' | 'selected' | 'onSelect'>;
  IconProps?: LucideProps;
}) => {
  const { className: TriggerClassName, ...rest } =
    PopoverProps?.popoverTrigger || {};

  return (
    <FormField
      {...props}
      render={({ field }) => {
        const valueString = field.value?.from
          ? field.value.to
            ? `${format(field.value.from, 'MM/dd/yyyy')} - ${format(
                field.value.to,
                'MM/dd/yyyy',
              )}`
            : format(field.value.from, 'MM/dd/yyyy')
          : placeholder;
        return (
          <FormItem className={className}>
            {label && <FormLabel {...labelProps}>{label}</FormLabel>}
            <Popover {...PopoverProps?.popover}>
              <FormControl>
                <PopoverTrigger
                  {...rest}
                  title={valueString}
                  className={cn(
                    'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>*]:line-clamp-1',
                    TriggerClassName,
                  )}
                >
                  <div className="inline-flex gap-2 whitespace-pre-wrap text-start">
                    {Icon && <Icon {...IconProps} />}
                    <span>{valueString}</span>
                  </div>
                  <ChevronDown
                    {...IconProps}
                    className={cn(
                      'text-foreground opacity-50',
                      IconProps?.className,
                    )}
                    size={IconProps?.size || 16}
                  />
                </PopoverTrigger>
              </FormControl>
              <PopoverContent
                {...PopoverProps?.popoverContent}
                className="w-auto rounded-t-none"
              >
                <Calendar
                  {...calendarProps}
                  mode="range"
                  selected={field.value}
                  onSelect={field.onChange}
                  defaultMonth={field.value?.from}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
