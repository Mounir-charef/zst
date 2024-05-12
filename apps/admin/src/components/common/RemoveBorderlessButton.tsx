import { cn } from '@mono/util';
import React, { ButtonHTMLAttributes } from 'react';

const RemoveBorderlessButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        'text-sm text-danger hover:text-danger-dark duration-200 transition-colors inline-block',
        className,
      )}
      {...props}
    >
      Remove
    </button>
  );
};

export default RemoveBorderlessButton;
