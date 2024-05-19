'use client';

import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  type Table as TableType,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Search } from 'lucide-react';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { Input } from '../../ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table';
import { DefaultTableToolbar } from './DefaultToolBar';
import { DataTablePagination } from './TablePagination';
import { ItemsTableToolbar } from './ItemsTableToolbar';

export type FilterOption<TData> = {
  column: keyof TData;
  title: string;
  options: {
    label: string;
    value: string;
  }[];
};

export type GlobalFilterOption<TData> = {
  column: keyof TData;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
};

export type GlobalAction<TData> = (table: TableType<TData>) => React.ReactNode;

interface DefaultTableProps<TData, TValue> {
  header?: {
    title: string;
    description?: string;
  };
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  globalAction?: GlobalAction<TData>;
  searchOptions?: {
    column: keyof TData;
    placeholder?: string;
  };
  filterOptions?: FilterOption<TValue>[];
  globalFilter?: never;
  variant?: 'default';
}

interface ItemsTableProps<TData, TValue> {
  header?: {
    title: string;
    description?: string;
  };
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  globalAction?: GlobalAction<TData>;
  searchOptions?: {
    column: keyof TData;
    placeholder?: string;
  };
  filterOptions?: FilterOption<TData>[];
  globalFilter?: {
    column: keyof TData;
    options: {
      label: string;
      value: string;
    }[];
  };
  variant: 'items-table';
}

type DataTableProps<TData, TValue> =
  | DefaultTableProps<TData, TValue>
  | ItemsTableProps<TData, TValue>;

export function DataTable<TData, TValue>({
  header,
  columns,
  data,
  searchOptions,
  filterOptions,
  globalFilter,
  globalAction,
  variant = 'default',
}: DataTableProps<TData, TValue>) {
  // if global filter's column is in filterOptions's columns throw an error
  if (
    globalFilter &&
    filterOptions?.some((filter) => filter.column === globalFilter.column)
  ) {
    throw new Error('Global filter column should not be in filter options');
  }
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const filters = React.useMemo(() => {
    return filterOptions?.map((filterOption) => {
      return {
        ...filterOption,
        column: table.getColumn(filterOption.column.toString()),
      } as {
        column: Column<TData, TValue>;
        title: string;
        options: {
          label: string;
          value: string;
        }[];
      };
    });
  }, [filterOptions, table]);

  const globalFilterOption = React.useMemo(() => {
    return globalFilter
      ? ({
          column: table.getColumn(globalFilter.column.toString()),
          options: globalFilter.options,
        } as {
          column: Column<TData, TValue>;
          options: {
            label: string;
            value: string;
            icon?: React.ComponentType<{ className?: string }>;
          }[];
        })
      : undefined;
  }, []);

  return (
    <Card>
      {header ? (
        <CardHeader className="flex flex-row flex-wrap items-end justify-between gap-2">
          <div className="flex flex-col justify-center gap-1.5">
            <CardTitle>{header.title}</CardTitle>
            {header.description ? (
              <CardDescription>{header.description}</CardDescription>
            ) : null}
          </div>
          {searchOptions && (
            <div className="relative flex-1 md:grow-0">
              <Search className="text-muted-foreground absolute start-2.5 top-2.5 h-4 w-4" />
              <Input
                placeholder={searchOptions.placeholder ?? 'Search...'}
                value={
                  (table
                    .getColumn(searchOptions.column.toString())
                    ?.getFilterValue() as string) ?? ''
                }
                onChange={(event) =>
                  table
                    .getColumn(searchOptions.column.toString())
                    ?.setFilterValue(event.target.value)
                }
                className="bg-background min-w-64 rounded-lg ps-8"
              />
            </div>
          )}
        </CardHeader>
      ) : null}
      <CardContent className="space-y-4">
        {variant === 'default' ? (
          <DefaultTableToolbar table={table} filterOptions={filters} />
        ) : (
          <ItemsTableToolbar
            table={table}
            filterOptions={filters}
            globalFilter={globalFilterOption}
            globalAction={globalAction}
          />
        )}
        <div className="bg-background rounded-md border p-4">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DataTablePagination table={table} />
      </CardContent>
    </Card>
  );
}
