import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@mono/util';
import { RiLoader4Line } from 'react-icons/ri';
import { IconType } from 'react-icons';

const buttonVariants = cva(
  'inline-flex gap-2 min-h-12 font-semibold items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-5',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        danger: 'bg-destructive text-white hover:bg-destructive/90',
        outline:
          'border border-primary bg-transparent shadow-sm text-primary hover:bg-primary hover:text-primary-foreground',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  rounded?: boolean;
  borderless?: boolean;
  isLoading?: boolean;
  Icon?: IconType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isLoading,
      borderless,
      className,
      variant,
      rounded,
      Icon,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, className }),
          rounded && 'rounded-full',
          borderless && 'border-none outline-none',
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {Icon && <Icon />}
        {children}
        {isLoading && <RiLoader4Line className="animate-spin" size={20} />}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
