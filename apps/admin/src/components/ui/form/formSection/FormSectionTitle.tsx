import { cn } from '@mono/util';
import React, { HTMLAttributes } from 'react';

const FormSectionTitle = ({
  children,
  className,
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn('text-base font-semibold text-body-dark', className)}>
      {children}
    </h2>
  );
};

export default FormSectionTitle;
