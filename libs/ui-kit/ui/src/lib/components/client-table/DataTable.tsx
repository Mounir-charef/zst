'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
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
import * as React from 'react';
import { DataTableFacetedFilterProps } from './FacetedFilter';
import { DataTableToolbar } from './ToolBar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table';
import { DataTablePagination } from './TablePagination';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { Input } from '../../ui/input';
import { Search } from 'lucide-react';

export type filterOption<TData> = {
  column: keyof TData;
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
};

interface DataTableProps<TData, TValue> {
  header?: {
    title: string;
    description?: string;
  };
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchOptions?: {
    column: keyof TData;
    placeholder?: string;
  };
  filterOptions?: filterOption<TValue>[];
}

export function DataTable<TData, TValue>({
  header,
  columns,
  data,
  searchOptions,
  filterOptions,
}: DataTableProps<TData, TValue>) {
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
      };
    });
  }, [filterOptions, table]);

  return (
    <Card>
      {header ? (
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col justify-center gap-1.5">
            <CardTitle>{header.title}</CardTitle>
            {header.description ? (
              <CardDescription>{header.description}</CardDescription>
            ) : null}
          </div>
          {searchOptions && (
            <div className="relative ms-auto flex-1 md:grow-0">
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
                className="bg-background w-full rounded-lg ps-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
          )}
        </CardHeader>
      ) : null}
      <CardContent className="space-y-4">
        <DataTableToolbar
          table={table}
          searchOptions={searchOptions}
          filterOptions={filters}
        />
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
