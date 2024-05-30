import { cn } from '@mono/util';
import React, { HTMLAttributes } from 'react';

interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const PageTitle = ({ className, children, ...props }: PageTitleProps) => {
  return (
    <h2
      className={cn('text-heading text-lg font-medium', className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default PageTitle;
