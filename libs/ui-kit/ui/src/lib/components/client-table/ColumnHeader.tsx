import { Column } from '@tanstack/react-table';
import { ArrowDownIcon, ArrowDownUpIcon, ArrowUpIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import { cn } from '@mono/util';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Button
        about="Button to toggle sorting of a column in a data table."
        variant="ghost"
        size="sm"
        className="data-[state=open]:bg-accent -ms-3 h-8"
        onClick={() => column.toggleSorting()}
      >
        <span>{title}</span>
        {column.getIsSorted() === 'desc' ? (
          <ArrowDownIcon className="text-muted-foreground ms-2 h-2.5 w-2.5" />
        ) : column.getIsSorted() === 'asc' ? (
          <ArrowUpIcon className="text-muted-foreground ms-2 h-2.5 w-2.5" />
        ) : (
          <ArrowDownUpIcon className="text-muted-foreground ms-2 h-2.5 w-2.5" />
        )}
      </Button>
    </div>
  );
}
