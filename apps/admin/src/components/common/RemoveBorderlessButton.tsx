import { cn } from '@mono/util';
import React, { ButtonHTMLAttributes } from 'react';

const RemoveBorderlessButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        'text-destructive inline-block text-sm transition-colors duration-200',
        className,
      )}
      {...props}
    >
      Remove
    </button>
  );
};

export default RemoveBorderlessButton;
