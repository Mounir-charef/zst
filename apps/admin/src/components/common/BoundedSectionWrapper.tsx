import { cn } from '@mono/util';
import React, { HTMLAttributes } from 'react';

interface BoundedSectionWrapperProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'children' | 'className'> {
  noSpacing?: boolean;
  noBorder?: boolean;
}

const BoundedSectionWrapper = ({
  children,
  className,
  noSpacing,
  noBorder,
}: BoundedSectionWrapperProps) => {
  return (
    <div
      className={cn(
        noBorder ? '' : 'pb-8 border-b border-dashed',
        noSpacing ? 'pb-7' : 'my-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default BoundedSectionWrapper;
