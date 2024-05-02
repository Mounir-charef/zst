import { cn } from '@mono/util';
import React, { ButtonHTMLAttributes } from 'react';

interface PaginationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  active?: boolean;
}

const PaginationItem = ({
  disabled,
  className,
  children,
  active,
  ...props
}: PaginationItemProps) => {
  return (
    <button
      className={cn(
        'h-8 min-w-8 p-2 flex items-center justify-center border rounded-md bg-white text-sm',
        active
          ? 'bg-primary text-white'
          : !disabled && 'hover:border-primary hover:text-primary',
        disabled && 'cursor-not-allowed text-muted',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default PaginationItem;
