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
        'bg-background flex h-8 min-w-8 items-center justify-center rounded-md border p-2 text-sm',
        active
          ? 'bg-primary text-white'
          : !disabled && 'hover:border-primary hover:text-primary',
        disabled && 'text-muted-foreground cursor-not-allowed',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default PaginationItem;
