'use client';

import {
  PopoverContentProps,
  PopoverProps,
  PopoverTriggerProps,
} from '@radix-ui/react-popover';

import { cn } from '@mono/util';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { CommandList } from 'cmdk';
import { CheckIcon, LucideProps } from 'lucide-react';
import { HTMLAttributes, ReactNode } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { Button } from '../../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../../ui/command';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';

export const ComboBoxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  className,
  options,
  PopoverProps,
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
  options: {
    label: string;
    value: string;
  }[];
  className?: string;
  placeholder?: string;
  shouldUnregister?: boolean;
  showErrors?: boolean;
  PopoverProps?: {
    popover?: PopoverProps;
    popoverContent?: PopoverContentProps & HTMLAttributes<HTMLDivElement>;
    popoverTrigger?: PopoverTriggerProps & HTMLAttributes<HTMLDivElement>;
  };
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
        <FormItem className={cn('flex flex-col gap-2', className)}>
          {label && <FormLabel {...labelProps}>{label}</FormLabel>}
          <Popover {...PopoverProps?.popover}>
            <FormControl>
              <PopoverTrigger asChild {...rest}>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      'justify-between',
                      !field.value && 'text-muted-foreground',
                      TriggerClassName,
                    )}
                  >
                    {field.value
                      ? options.find((option) => option.value === field.value)
                          ?.label
                      : placeholder || 'Select an option'}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
            </FormControl>
            <PopoverContent
              {...PopoverProps?.popoverContent}
              className={cn('p-0', PopoverProps?.popoverContent?.className)}
            >
              <Command>
                <CommandInput placeholder={`Search for ${field.name}'s`} />
                <CommandEmpty>No options found for "{field.name}"</CommandEmpty>
                <CommandGroup>
                  <CommandList>
                    {options.map((option) => (
                      <CommandItem
                        value={option.label}
                        key={option.value}
                        onSelect={() => field.onChange(option.value)}
                      >
                        <CheckIcon
                          className={cn(
                            'mr-2 h-4 w-4',
                            option.value === field.value
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandList>
                </CommandGroup>
              </Command>
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
