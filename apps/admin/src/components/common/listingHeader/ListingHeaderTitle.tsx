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
        "before:content-'' text-heading before:bg-primary relative text-lg font-semibold before:absolute before:-top-0.5 before:h-8 before:rounded-br-md before:rounded-tr-md md:before:w-1 ltr:before:-left-8 rtl:before:-right-8",
        className,
      )}
    >
      {title}
    </h2>
  );
};

export default ListingHeaderTitle;
