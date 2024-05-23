import { Button } from '@mono/ui';
import { TransitionStartFunction, memo, useTransition } from 'react';
import CategoryFilter, { CategoryFilterOption } from './CategoryFilter';
import SubFilters, { SubFilter } from './SubFilters';

const categoryFilters: CategoryFilterOption[] = [
  { label: 'New', value: 'new' },
  { label: 'Hot deals', value: 'hot' },
  { label: 'Promotions', value: 'promotion' },
];

const subFilters: SubFilter[] = [
  {
    label: 'Price',
    name: 'price',
    options: [
      { label: 'Under $50', value: 'under-50' },
      { label: 'Between $50 and $100', value: 'between-50-100' },
      { label: 'Over $100', value: 'over-100' },
    ],
  },
];

const CardFilters = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
      <div className="flex flex-1 flex-wrap items-center gap-1 gap-x-2">
        <CategoryFilter options={categoryFilters} filterName="category" />
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        <SubFilters filters={subFilters} />
        <Button className="h-8 gap-1">Add Auction</Button>
      </div>
    </div>
  );
};

export default memo(CardFilters);
