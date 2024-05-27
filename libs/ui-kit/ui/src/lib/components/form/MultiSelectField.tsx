'use client';

import { CheckIcon, ChevronDown } from 'lucide-react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import { cn } from '@mono/util';
import { Button } from '../../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
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
import { ReactNode } from 'react';

export const MultiSelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  options,
  className,
  label,
  placeholder,
  description,
  descriptionProps,
  showErrors = true,
  ...props
}: {
  options: { label: string; value: string }[];
  control: Control<TFieldValues>;
  showErrors?: boolean;
  name: TName;
  placeholder?: string;
  label?: string | JSX.Element;
  description?: string | ReactNode;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  onChange?: (value: string) => void;
}) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {!!label && <FormLabel>{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'justify-between',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  <span className="truncate">
                    {field.value?.length
                      ? field.value
                          .map(
                            (v: string) =>
                              options.find((o) => o.value === v)?.label,
                          )
                          .join(', ')
                      : placeholder}
                  </span>
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-full">
              <Command>
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => {
                      const isSelected = field.value?.includes(option.value);
                      return (
                        <CommandItem
                          className="min-w-40"
                          key={option.value}
                          onSelect={(item) => {
                            field.value
                              ? isSelected
                                ? field.onChange(
                                    field.value.filter(
                                      (v: string) => v !== item,
                                    ),
                                  )
                                : field.onChange([...field.value, item])
                              : field.onChange([item]);
                          }}
                        >
                          <div
                            className={cn(
                              'border-primary mr-2 flex h-4 w-4 items-center justify-center rounded-sm border',
                              isSelected
                                ? 'bg-primary text-primary-foreground'
                                : 'opacity-50 [&_svg]:invisible',
                            )}
                          >
                            <CheckIcon className={cn('h-4 w-4')} />
                          </div>

                          <span>{option.label}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {!!description && (
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
