'use client';

import { Button } from '@mono/ui';
import { XIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { memo, useCallback } from 'react';
import { usePathname, useRouter } from '../../../../../navigation';
import { useDebounceCallback } from 'usehooks-ts';

interface FilterBadgeProps {
  name: string;
  value: string;
  removeFilter: (name: string, value: string) => void;
}

const FilterBadge = ({ name, value, removeFilter }: FilterBadgeProps) => {
  return (
    <Button
      variant="secondary"
      onClick={() => removeFilter(name, value)}
      size="sm"
    >
      {name}: {value} <XIcon className="ms-2 h-4 w-4" />
    </Button>
  );
};

export default memo(FilterBadge);
