'use client';

import React, { useState } from 'react';
import Select, { SelectOption } from '../../ui/form/select/Select';
import { Label } from '@mono/ui/lib/ui/label';

interface Filter {
  label: string;
  name: string;
  options: SelectOption[];
}

interface ListingHeaderBottomFiltersProps {
  filters: Filter[];
}

const ListingHeaderBottomFilters = ({
  filters,
}: ListingHeaderBottomFiltersProps) => {
  const [values, setValues] = useState({});
  return (
    <div className="mt-5 flex w-full flex-col border-t gap-5 border-gray-200 pt-5 md:mt-8 md:flex-row md:items-center md:pt-8">
      {filters.map((filter) => {
        return (
          <div key={filter.name} className="flex-1">
            <Label className="mb-3 inline-block">{filter.label}</Label>
            <Select
              value={values[filter.name as keyof typeof values] || ''}
              onChange={(value) => {
                setValues((current) => ({
                  ...current,
                  [filter.name]: value,
                }));
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
