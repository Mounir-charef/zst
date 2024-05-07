import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@mono/util';

const buttonVariants = cva(
  'inline-flex min-h-12 font-semibold items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-5',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white shadow hover:bg-primary/90',
        danger: 'bg-danger text-white hover:bg-danger-dark',
        outline:
          'border border-primary bg-transparent shadow-sm text-primary hover:bg-primary hover:text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  rounded?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, className }),
          rounded && 'rounded-full'
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
