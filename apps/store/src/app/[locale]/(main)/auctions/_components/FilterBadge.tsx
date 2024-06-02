'use client';

import { Button } from '@mono/ui';
import { XIcon } from 'lucide-react';
import { memo } from 'react';

interface FilterBadgeProps {
  name: string;
  removeFilter: (name: string) => void;
}

const FilterBadge = ({ name, removeFilter }: FilterBadgeProps) => {
  return (
    <Button variant="secondary" onClick={() => removeFilter(name)} size="sm">
      {name} <XIcon className="ms-2 h-4 w-4" />
    </Button>
  );
};

export default memo(FilterBadge);
