'use client';

import { Column } from '@tanstack/react-table';
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { GlobalFilterOption } from './DataTable';
import { useState } from 'react';

export function GlobalFilter<TData, TValue>({
  column,
  options,
}: {
  column: Column<TData, TValue>;
  options: GlobalFilterOption<TData>['options'];
}) {
  const [filterValue, setFilterValue] = useState<string>(
    column.getFilterValue() ? (column.getFilterValue() as string) : 'all',
  );
  return (
    <ToggleGroup
      variant="filter"
      size="sm"
      type="single"
      className="bg-muted text-muted-foreground rounded-md p-1"
      aria-label="table global filter"
      value={filterValue}
      onValueChange={(value) => {
        if (!value) return;
        setFilterValue(value);

        if (value === 'all') {
          column.setFilterValue(undefined);
        } else {
          column.setFilterValue(value);
        }
      }}
    >
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      {options.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          aria-label={`${option.label}${column.getFilterValue() === option.value ? ' selected' : ''}`}
        >
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
