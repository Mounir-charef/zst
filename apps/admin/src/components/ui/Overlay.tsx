import { cn } from '@mono/util';
import React, { HTMLAttributes } from 'react';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
}

const Overlay = ({ isVisible = true, className, ...props }: OverlayProps) => {
  return (
    <div
      className={cn(
        'fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50 z-40 transition-all',
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible',
        className
      )}
      {...props}
    />
  );
};

export default Overlay;
