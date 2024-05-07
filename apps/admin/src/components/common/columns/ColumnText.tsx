import { cn } from '@mono/util';
import React from 'react';

const ColumnText = ({
  text,
  className,
}: {
  text: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn('text-[#666666] text-sm', className)}>{text}</span>
  );
};

export default ColumnText;
