'use client';

import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';
import { Button } from '../../ui/button';
import {
  DataTableFacetedFilter,
  DataTableFacetedFilterProps,
} from './FacetedFilter';
import { DataTableViewOptions } from './ViewOptions';
import { ToggleGroup, ToggleGroupItem } from '../../ui/toggle-group';

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
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className="flex items-start justify-between gap-x-4">
      <div className="flex flex-1 flex-wrap items-center gap-1 gap-x-2">
        {/* {filterOptions?.map((filterOption) => {
          if (!filterOption.column) return null;
          return (
            <DataTableFacetedFilter
              key={filterOption.title}
              {...filterOption}
            />
          );
        })} */}
        <ToggleGroup
          type="single"
          defaultValue="all"
          className="bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1"
        >
          <ToggleGroupItem
            className="ring-offset-background focus-visible:ring-ring aria-checked:bg-background aria-checked:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-checked:shadow-sm"
            value="all"
            aria-label="Toggle All"
          >
            All
          </ToggleGroupItem>
          <ToggleGroupItem
            className="ring-offset-background focus-visible:ring-ring aria-checked:bg-background aria-checked:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-checked:shadow-sm"
            value="low"
            aria-label="Toggle low"
          >
            Low
          </ToggleGroupItem>
          <ToggleGroupItem
            className="ring-offset-background focus-visible:ring-ring aria-checked:bg-background aria-checked:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-checked:shadow-sm"
            value="medium"
            aria-label="Toggle medium"
          >
            Medium
          </ToggleGroupItem>
          <ToggleGroupItem
            className="ring-offset-background focus-visible:ring-ring aria-checked:bg-background aria-checked:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-checked:shadow-sm"
            value="high"
            aria-label="Toggle high"
          >
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
