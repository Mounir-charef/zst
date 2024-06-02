'use client';

import { ToggleGroup, ToggleGroupItem } from '@mono/ui';
import { useSearchParams } from 'next/navigation';
import { memo, useCallback, useMemo, useTransition } from 'react';
import { usePathname, useRouter } from '../../navigation';

export interface GlobalFilterOption {
  label: string;
  value: string;
}

export interface GlobalFilterProps {
  options: GlobalFilterOption[];
  filterName: string;
}

const GlobalFilter = ({ filterName, options }: GlobalFilterProps) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filterValue = useMemo(() => {
    const value = searchParams.get(filterName);
    if (!value || options.every((option) => option.value !== value)) {
      return 'all';
    }
    return value;
  }, [searchParams, filterName]);

  const [isPending, startTransition] = useTransition();

  const handleFilter = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      if (!value || value === 'all') {
        params.delete(filterName);
      } else {
        params.set(filterName, value);
      }
      startTransition(() => replace(`${pathname}?${params.toString()}`));
    },
    [searchParams, filterName, replace, pathname],
  );
  return (
    <ToggleGroup
      variant="filter"
      size="sm"
      type="single"
      className="bg-muted text-muted-foreground rounded-md p-1"
      aria-label="table global filter"
      value={filterValue}
      onValueChange={handleFilter}
      disabled={isPending}
    >
      <ToggleGroupItem value="all">All</ToggleGroupItem>
      {options.map((option) => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          aria-label={`${option.label}${filterValue === option.value ? ' selected' : ''}`}
        >
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default memo(GlobalFilter);
