'use client';

import { ListFilter } from 'lucide-react';
import { Button } from '../../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { DataTableFacetedFilterProps } from './FacetedFilter';
import { MenuFilter } from './MenuFilter';
import { Fragment } from 'react';

export function ItemsTableFiltersMenu<TData, TValue>({
  filterOptions,
}: {
  filterOptions: DataTableFacetedFilterProps<TData, TValue>[];
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Filter
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {filterOptions.map((filterOption, index) => (
          <Fragment key={filterOption.title}>
            <MenuFilter {...filterOption} />
            {index < filterOptions.length - 1 && <DropdownMenuSeparator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
