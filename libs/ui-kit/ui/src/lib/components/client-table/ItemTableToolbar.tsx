'use client';

import { Table } from '@tanstack/react-table';
import { Button } from '../../ui/button';
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';
import { DataTableFacetedFilterProps } from './FacetedFilter';
import { DataTableViewOptions } from './ViewOptions';
import { useState } from 'react';

interface ItemTableToolbarProps<TData, TValue> {
  table: Table<TData>;
  searchOptions?: {
    column: keyof TData;
    placeholder?: string;
  };
  filterOptions?: DataTableFacetedFilterProps<TData, TValue>[];
}

export function ItemTableToolbar<TData, TValue>({
  table,
  filterOptions,
}: ItemTableToolbarProps<TData, TValue>) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  return (
    <div className="flex items-start justify-between gap-x-4">
      <div className="flex flex-1 flex-wrap items-center gap-1 gap-x-2">
        <ToggleGroup
          defaultValue="all"
          variant="filter"
          size="sm"
          type="single"
          className="bg-muted text-muted-foreground rounded-md p-1"
          onValueChange={(value) => {
            if (!!value) setSelectedFilter(value);
          }}
          value={selectedFilter}
        >
          <ToggleGroupItem value="all" aria-label="Toggle All">
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="low" aria-label="Toggle low">
            Low
          </ToggleGroupItem>
          <ToggleGroupItem value="medium" aria-label="Toggle medium">
            Medium
          </ToggleGroupItem>
          <ToggleGroupItem value="high" aria-label="Toggle high">
            High
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="itece flex flex-col items-end gap-1 md:flex-row-reverse md:items-center">
        <Button
          size="sm"
          className="h-8"
          onClick={() =>
            console.log(
              table.getSelectedRowModel().rows.map((row) => row.original),
            )
          }
        >
          Action
        </Button>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
