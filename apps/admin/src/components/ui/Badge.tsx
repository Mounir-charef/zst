import { cn } from '@mono/util';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const badgeVariants = cva(
  'inline-block px-3 py-1.5 rounded text-xs whitespace-nowrap relative font-medium capitalize',
  {
    variants: {
      variant: {
        primary: 'bg-primary/10 text-primary-foreground',
        danger: 'bg-destructive/10 text-destructive',
        simple: 'bg-gray-200/50',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ className, variant }))} {...props} />
  );
};

export default Badge;
