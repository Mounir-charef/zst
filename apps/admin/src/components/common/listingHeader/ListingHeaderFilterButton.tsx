import React from 'react';
import { GoArrowUp } from 'react-icons/go';

const ListingHeaderFilterButton = () => {
  return (
    <button className="flex items-center gap-1 text-primary">
      <span className="font-semibold">Filter</span> <GoArrowUp />
    </button>
  );
};

export default ListingHeaderFilterButton;
