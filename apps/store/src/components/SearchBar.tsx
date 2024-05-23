'use client';
import { useSearchParams } from 'next/navigation';
import { memo, useMemo, useTransition } from 'react';
import { usePathname, useRouter } from '../navigation';

import { Input } from '@mono/ui';
import { Loader2, SearchIcon } from 'lucide-react';
import { useDebounceCallback } from 'usehooks-ts';

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const defaultValue = useMemo(
    () => searchParams.get('search') || '',
    [searchParams],
  );

  const [isPending, startTransition] = useTransition();

  const { replace } = useRouter();

  const handleSearch = useDebounceCallback((search: string) => {
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }, 300);

  return (
    <div className="relative">
      {isPending ? (
        <Loader2 className="text-muted-foreground absolute start-2.5 top-2.5 h-4 w-4 animate-spin" />
      ) : (
        <SearchIcon className="text-muted-foreground absolute start-2.5 top-2.5 h-4 w-4" />
      )}
      <Input
        disabled={isPending}
        defaultValue={defaultValue}
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        className="bg-background rounded-lg ps-8 sm:min-w-80"
      />
    </div>
  );
};

export default memo(SearchBar);
