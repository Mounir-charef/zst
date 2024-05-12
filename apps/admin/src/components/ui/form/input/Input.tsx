import { cn } from '@mono/util';
import { InputHTMLAttributes, forwardRef } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'bg-background border-border-base focus:bg-light focus:border-primary flex h-12 w-full appearance-none items-center rounded border px-4 text-sm transition duration-300 ease-in-out focus:shadow focus:outline-none focus:ring-0',
          className,
        )}
        {...props}
      />
    );
  },
);

export default Input;
