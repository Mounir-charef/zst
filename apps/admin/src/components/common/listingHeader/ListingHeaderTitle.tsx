import { cn } from '@mono/util';
import React from 'react';

const ListingHeaderTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "before:content-'' relative text-lg font-semibold text-heading before:absolute before:-top-0.5 before:h-8 before:rounded-tr-md before:rounded-br-md before:bg-primary ltr:before:-left-8 rtl:before:-right-8 md:before:w-1",
        className
      )}
    >
      {title}
    </h2>
  );
};

export default ListingHeaderTitle;
