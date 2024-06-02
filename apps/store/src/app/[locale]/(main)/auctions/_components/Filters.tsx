'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  Label,
  RadioGroup,
  RadioGroupItem,
  Slider,
} from '@mono/ui';
import { useSearchParams } from 'next/navigation';
import { memo, useCallback, useId, useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { usePathname, useRouter } from '../../../../../navigation';

type Value = string | number;

interface defaultFilter {
  name: string;
  label: string;
  defaultOpen?: boolean;
}

interface TRangeFilter extends defaultFilter {
  type: 'range';
  defaultValue: [number, number];
  step?: number;
}

interface TCheckboxFilter extends defaultFilter {
  type: 'checkbox';
  options: { label: string; value: string }[];
}

interface TRadioFilter extends defaultFilter {
  type: 'radio';
  options: { label: string; value: string }[];
}

export type Filter = TRangeFilter | TCheckboxFilter | TRadioFilter;

interface RangeFilterProps extends TRangeFilter {
  applyFilter: (name: string, value: Value[]) => void;
}

interface CheckboxFilterProps extends TCheckboxFilter {
  applyFilter: (name: string, value: Value[]) => void;
}

interface RadioFilterProps extends TRadioFilter {
  applyFilter: (name: string, value: Value) => void;
}

interface FiltersProps {
  filters: Filter[];
}

const RangeFilter = memo(
  ({ label, name, step = 1, applyFilter, defaultValue }: RangeFilterProps) => {
    const searchParams = useSearchParams();
    const valueFromUrl = searchParams.getAll(name).map(Number);

    const isValid =
      valueFromUrl.length === 2 &&
      valueFromUrl.every(
        (value) => value >= defaultValue[0] && value <= defaultValue[1],
      ) &&
      valueFromUrl[0] < valueFromUrl[1] &&
      valueFromUrl.every((value) => !isNaN(value)) &&
      valueFromUrl.every((value) => typeof value === 'number');

    const [value, setValue] = useState(isValid ? valueFromUrl : defaultValue);

    return (
      <AccordionItem value={name}>
        <AccordionTrigger className="py-3 text-sm">{label}</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>{value[0]}</span>
              <span>{value[1]}</span>
            </div>
            <Slider
              min={defaultValue[0]}
              max={defaultValue[1]}
              onValueChange={(value) => {
                setValue(value);
                applyFilter(name, value);
              }}
              step={step}
              value={value}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  },
);

const CheckBoxItem = memo(
  ({
    applyFilter,
    setValue,
    value,
    option,
    name,
  }: {
    value: string[];
    setValue: (value: string[]) => void;
    applyFilter: (name: string, value: Value[]) => void;
    option: { label: string; value: string };
    name: string;
  }) => {
    const id = useId();
    return (
      <div className="flex items-center space-x-2 ps-4">
        <Checkbox
          id={id}
          checked={value.includes(option.value)}
          onCheckedChange={(checked) => {
            const newValue = checked
              ? [...value, option.value]
              : value.filter((v) => v !== option.value);

            setValue(newValue);
            applyFilter(name, newValue);
          }}
        />
        <Label htmlFor={id}>{option.label}</Label>
      </div>
    );
  },
);

const CheckboxFilter = memo(
  ({ applyFilter, label, name, options, type }: CheckboxFilterProps) => {
    const searchParams = useSearchParams();
    const [value, setValue] = useState(
      searchParams
        .getAll(name)
        .filter((v) => options.some((o) => o.value === v)),
    );

    return (
      <AccordionItem value={name}>
        <AccordionTrigger className="py-3 text-sm">{label}</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            {options.map((option) => (
              <CheckBoxItem
                key={option.value}
                applyFilter={applyFilter}
                setValue={setValue}
                value={value}
                option={option}
                name={name}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  },
);

const RadioItem = memo(
  ({ option }: { option: TRadioFilter['options'][number] }) => {
    const id = useId();
    return (
      <div className="flex items-center space-x-2 ps-4">
        <RadioGroupItem value={option.value} id={id} />
        <Label htmlFor={id}>{option.label}</Label>
      </div>
    );
  },
);

const RadioFilter = memo(
  ({ applyFilter, label, name, options, type }: RadioFilterProps) => {
    return (
      <AccordionItem value={name}>
        <AccordionTrigger className="py-3 text-sm">{label}</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <RadioGroup onValueChange={(value) => applyFilter(name, value)}>
              {options.map((option) => (
                <RadioItem key={option.value} option={option} />
              ))}
            </RadioGroup>
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  },
);

const Filters = memo(({ filters }: FiltersProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const applyStringFilter = useCallback(
    (name: string, value: Value) => {
      const params = new URLSearchParams(searchParams);
      if (!value) {
        params.delete(name);
      } else {
        params.set(name, value.toString());
      }

      replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [searchParams],
  );

  const applyArrayFilter = useCallback(
    (name: string, value: Value[]) => {
      const params = new URLSearchParams(searchParams);
      params.delete(name);

      if (value.length) {
        value.forEach((v) => params.append(name, v.toString()));
      }

      replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [searchParams],
  );

  const debouncedApplyArrayFilter = useDebounceCallback(applyArrayFilter, 500);
  const debouncedApplyStringFilter = useDebounceCallback(
    applyStringFilter,
    500,
  );
  return (
    <Accordion
      type="multiple"
      defaultValue={filters
        .filter((filter) => filter.defaultOpen)
        .map((filter) => filter.name)}
    >
      {filters.map((filter) => {
        switch (filter.type) {
          case 'range':
            return (
              <RangeFilter
                key={filter.name}
                {...filter}
                applyFilter={debouncedApplyArrayFilter}
              />
            );
          case 'checkbox':
            return (
              <CheckboxFilter
                key={filter.name}
                {...filter}
                applyFilter={debouncedApplyArrayFilter}
              />
            );
          case 'radio':
            return (
              <RadioFilter
                key={filter.name}
                {...filter}
                applyFilter={debouncedApplyStringFilter}
              />
            );

          default:
            return null;
        }
      })}
    </Accordion>
  );
});

export default Filters;
