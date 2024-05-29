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
  return <div className={cn('mb-4 pb-4', className)}>{children}</div>;
};

export default BoundedSectionWrapper;
