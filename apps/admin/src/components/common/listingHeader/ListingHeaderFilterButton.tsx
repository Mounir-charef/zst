import { cn } from '@mono/util';
import React, { ButtonHTMLAttributes } from 'react';
import { GoArrowUp } from 'react-icons/go';

interface ListingHeaderFilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
}

const ListingHeaderFilterButton = ({ isOpen, onClick }: ListingHeaderFilterButtonProps) => {
  return (
    <button onClick={onClick} className="flex items-center gap-1 text-primary">
      <span className="font-semibold">Filter</span> <GoArrowUp className={cn(isOpen && 'rotate-180')} />
    </button>
  );
};

export default ListingHeaderFilterButton;
