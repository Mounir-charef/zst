'use client';

import { Column, Table } from '@tanstack/react-table';
import { Button } from '../../ui/button';
import { DataTableFacetedFilterProps } from './FacetedFilter';
import { GlobalFilter } from './GlobalFilter';
import { DataTableViewOptions } from './ViewOptions';
import { ItemsTableFiltersMenu } from './ItemsTableFiltersMenu';
import { GlobalAction } from './DataTable';

interface ItemsTableToolbarProps<TData, TValue> {
  table: Table<TData>;
  globalAction?: GlobalAction<TData>;
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
  globalAction,
}: ItemsTableToolbarProps<TData, TValue>) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
      <div className="flex flex-1 flex-wrap items-center gap-1 gap-x-2">
        {globalFilter && globalFilter.options.length > 0 ? (
          <GlobalFilter {...globalFilter} />
        ) : null}
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        {filterOptions && filterOptions.length > 0 ? (
          <ItemsTableFiltersMenu filterOptions={filterOptions} />
        ) : null}
        <DataTableViewOptions table={table} />
        {globalAction ? <>{globalAction(table)}</> : null}
      </div>
    </div>
  );
}
