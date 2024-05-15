'use client';

import React, { useState } from 'react';
import Select, { SelectOption } from '../../ui/form/select/Select';
import { Label } from '@mono/ui/lib/ui/label';

interface Filter {
  label: string;
  name: string;
  // value: unknown
  // onChange: (value: unknown) => unknown
  options: SelectOption[];
}

interface ListingHeaderBottomFiltersProps {
  values: { [prop: string]: string };
  onChange: (name: string, value: unknown) => unknown;
  filters: Filter[];
}

const ListingHeaderBottomFilters = ({
  filters,
  values,
  onChange,
}: ListingHeaderBottomFiltersProps) => {
  return (
    <div className="mt-5 flex w-full flex-col gap-5 border-t border-gray-200 pt-5 md:mt-8 md:flex-row md:items-center md:pt-8">
      {filters.map((filter) => {
        return (
          <div key={filter.name} className="flex-1">
            <Label className="mb-3 inline-block">{filter.label}</Label>
            <Select
              value={values[filter.name as keyof typeof values]}
              onChange={(value) => {
                onChange(filter.name, value as string);
              }}
              name={filter.name}
              options={filter.options}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListingHeaderBottomFilters;
