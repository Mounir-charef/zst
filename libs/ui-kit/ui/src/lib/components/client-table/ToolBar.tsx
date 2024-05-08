'use client';

import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';
import {
  DataTableFacetedFilter,
  DataTableFacetedFilterProps,
} from './FacetedFilter';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { DataTableViewOptions } from './ViewOptions';

interface DataTableToolbarProps<TData, TValue> {
  table: Table<TData>;
  searchOptions?: {
    column: keyof TData;
    placeholder?: string;
  };
  filterOptions?: DataTableFacetedFilterProps<TData, TValue>[];
}

export function DataTableToolbar<TData, TValue>({
  table,
  filterOptions,
}: DataTableToolbarProps<TData, TValue>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return (
    <div className="flex items-start justify-between gap-x-4">
      <div className="flex flex-1 flex-wrap items-center gap-1 gap-x-2">
        {filterOptions?.map((filterOption) => {
          if (!filterOption.column) return null;
          return (
            <DataTableFacetedFilter
              key={filterOption.title}
              {...filterOption}
            />
          );
        })}

        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 text-black lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
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
