'use client';

import { Column, Table } from '@tanstack/react-table';
import { Button } from '../../ui/button';
import { DataTableFacetedFilterProps } from './FacetedFilter';
import { GlobalFilter } from './GlobalFilter';
import { DataTableViewOptions } from './ViewOptions';
import { ItemsTableFiltersMenu } from './ItemsTableFiltersMenu';

interface ItemsTableToolbarProps<TData, TValue> {
  table: Table<TData>;

  filterOptions?: DataTableFacetedFilterProps<TData, TValue>[];
  globalFilter?: {
    column: Column<TData, TValue>;
    options: {
      label: string;
      value: string;
    }[];
  };
}

export function ItemsTableToolbar<TData, TValue>({
  table,
  filterOptions,
  globalFilter,
}: ItemsTableToolbarProps<TData, TValue>) {
  return (
    <div className="flex items-start justify-between gap-x-4">
      <div className="flex flex-1 flex-wrap items-center gap-1 gap-x-2">
        {globalFilter && globalFilter.options.length > 0 ? (
          <GlobalFilter {...globalFilter} />
        ) : null}
      </div>
      <div className="itece flex flex-col-reverse items-end gap-1 md:flex-row md:items-center md:gap-2">
        {filterOptions && filterOptions.length > 0 ? (
          <ItemsTableFiltersMenu filterOptions={filterOptions} />
        ) : null}
        <DataTableViewOptions table={table} />
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
      </div>
    </div>
  );
}
