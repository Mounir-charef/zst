'use client';
import { useSearchParams } from 'next/navigation';
import { memo, useCallback, useEffect, useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { usePathname, useRouter } from '../../../../../navigation';
import FilterBadge from './FilterBadge';
import { Button } from '@mono/ui';

const FiltersList = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [filters, setFilters] = useState(new Set(searchParams.keys()));

  const replaceFilter = useCallback(
    (params: URLSearchParams) => {
      replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    },
    [pathname, replace],
  );

  const debouncedReplaceFilter = useDebounceCallback(replaceFilter, 500);

  const removeFilter = useCallback(
    (name: string) => {
      const newFilters = new Set(filters);
      newFilters.delete(name);
      setFilters(newFilters);
      const newParams = new URLSearchParams();
      newFilters.forEach((filter) => {
        const values = searchParams.getAll(filter);
        if (filter === name || !values) return;
        values.forEach((value) => {
          newParams.append(filter, value);
        });
      });
      debouncedReplaceFilter(newParams);
    },
    [debouncedReplaceFilter, filters, searchParams],
  );

  const removeAllFilters = useCallback(() => {
    setFilters(new Set());
    debouncedReplaceFilter(new URLSearchParams());
  }, [debouncedReplaceFilter]);

  useEffect(() => {
    setFilters(new Set(searchParams.keys()));
  }, [searchParams]);

  return (
    <div className="flex flex-wrap gap-4">
      {Array.from(filters).map((filter) => (
        <FilterBadge key={filter} name={filter} removeFilter={removeFilter} />
      ))}
      {filters.size > 0 && (
        <Button variant="outline" onClick={removeAllFilters}>
          Clear All
        </Button>
      )}
    </div>
  );
};

export default memo(FiltersList);
