import { cn } from '@mono/util';
import React, { HTMLAttributes } from 'react';

interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const PageTitle = ({ className, children, ...props }: PageTitleProps) => {
  return (
    <h2
      className={cn('text-lg font-semibold text-heading', className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default PageTitle;
