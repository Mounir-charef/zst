import * as React from 'react';

import { cn } from '@mono/util';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'text-heading bg-background border-border-base focus:bg-light focus:border-primary w-full appearance-none rounded border px-4 py-3 text-sm transition duration-300 ease-in-out focus:shadow focus:outline-none focus:ring-0',
          className,
        )}
        ref={ref}
        rows={4}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
