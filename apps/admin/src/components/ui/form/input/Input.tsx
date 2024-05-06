import { cn } from '@mono/util';
import { InputHTMLAttributes, forwardRef } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'px-4 h-12 flex items-center w-full border rounded appearance-none transition duration-300 ease-in-out text-sm focus:outline-none focus:ring-0 bg-white border-border-base focus:shadow focus:bg-light focus:border-primary',
          className
        )}
        {...props}
      />
    );
  }
);

export default Input;
