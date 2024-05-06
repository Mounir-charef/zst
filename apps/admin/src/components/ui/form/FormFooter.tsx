import { cn } from '@mono/util';
import React, { HTMLAttributes } from 'react';

export const FormFooterButtonsWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('flex gap-4', className)}>{children}</div>;
};

const FormFooter = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'sticky bottom-0 -mx-5 bg-gray-100/10 py-3 px-5 backdrop-blur flex justify-end gap-4 md:py-5 lg:-mx-8 lg:px-8 z-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FormFooter;
