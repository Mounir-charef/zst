import * as React from 'react';

import { cn } from '@mono/util';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-border-base focus:shadow focus:bg-light focus:border-primary',
          className
        )}
        ref={ref}
        rows={4}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
