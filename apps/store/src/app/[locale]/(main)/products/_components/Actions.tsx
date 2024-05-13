'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  GlobalAction,
  buttonVariants,
} from '@mono/ui';
import { FileIcon, PlusCircle } from 'lucide-react';
import { Link } from '../../../../../navigation';
import { Product, productSchema } from '../_data/schema';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const product = productSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          {product.name} - {product.id}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const globalAction: GlobalAction<Product> = () => {
  return (
    <>
      <Button variant="outline" className="h-8">
        <FileIcon className="me-2 h-4 w-4" /> Export
      </Button>
      <Link
        href={'/products/new'}
        className={buttonVariants({
          variant: 'reverse',
          className: 'h-8',
        })}
      >
        <PlusCircle className="me-2 h-4 w-4" /> Add Product
      </Link>
    </>
  );
};
