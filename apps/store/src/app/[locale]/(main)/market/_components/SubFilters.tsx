'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mono/ui';
import { ListFilter } from 'lucide-react';
import { Fragment, TransitionStartFunction, memo, useTransition } from 'react';
import MenuFilter from './MenuFilter';

export interface SubFilter {
  label: string;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
}

interface SubFiltersProps {
  filters: SubFilter[];
}

const SubFilters = ({ filters }: SubFiltersProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          isLoading={isPending}
          variant="outline"
          size="sm"
          className="h-8 gap-1"
        >
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Filter
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {filters.map((filterOption, index) => (
          <Fragment key={filterOption.name}>
            <MenuFilter {...filterOption} startTransition={startTransition} />
            {index < filters.length - 1 && <DropdownMenuSeparator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(SubFilters);
