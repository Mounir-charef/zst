'use client';
import { useSearchParams } from 'next/navigation';
import { memo, useCallback, useEffect, useState } from 'react';
import FilterBadge from './FilterBadge';
import { usePathname, useRouter } from '../../../../../navigation';
import { useDebounceCallback } from 'usehooks-ts';

function getFilterFromSearchParams(searchParams: URLSearchParams) {
  const filters = [];
  for (const [name, value] of searchParams) {
    filters.push({ name, value });
  }
  return filters;
}

const FiltersList = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [filters, setFilters] = useState(
    getFilterFromSearchParams(searchParams),
  );

  const replaceFilter = useCallback(
    (params: URLSearchParams) => {
      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace],
  );

  const debouncedReplaceFilter = useDebounceCallback(replaceFilter, 500);

  const removeFilter = useCallback(
    (name: string, value: string) => {
      if (!searchParams.has(name)) return;
      const params = new URLSearchParams(searchParams.toString());
      if (params.getAll(name).length === 1) {
        params.delete(name);
      } else {
        params.delete(name, value);
      }
      setFilters((prevFilters) => {
        return prevFilters.filter((filter) => {
          return filter.name !== name || filter.value !== value;
        });
      });

      debouncedReplaceFilter(params);
    },
    [name, searchParams],
  );

  useEffect(() => {
    setFilters(getFilterFromSearchParams(searchParams));
  }, [searchParams]);

  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter) => (
        <FilterBadge
          key={filter.name}
          {...filter}
          removeFilter={removeFilter}
        />
      ))}
    </div>
  );
};

export default memo(FiltersList);
