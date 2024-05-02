import React, { HTMLAttributes } from 'react';
import usePagination, { UsePaginationArgs } from '../../../hooks/usePagination';
import PaginationItem from './PaginationItem';
import { cn } from '@mono/util';
import { IoChevronBackSharp } from 'react-icons/io5';
import { IoChevronForwardSharp } from 'react-icons/io5';

export interface PaginationProps
  extends Omit<UsePaginationArgs, 'siblingCount'> {
  onChange: (page: number) => unknown;
}

const Pagination = ({ currentPage, totalPages, onChange }: PaginationProps) => {
  const pagination = usePagination({
    currentPage,
    totalPages,
  });
  return (
    <div className="mt-8 flex justify-end">
      <div className="flex flex-wrap rtl:flex-row-reverse gap-1.5">
        <PaginationItem
          disabled={!(currentPage > 1)}
          onClick={() => {
            onChange(currentPage - 1);
          }}
        >
          <IoChevronBackSharp size={14} />
        </PaginationItem>
        {pagination.map((pageNumber, index) => {
          if (pageNumber === '...') {
            return (
              <span
                key={pageNumber + index}
                className="font-semibold text-lg inline-block mx-1"
              >
                &#8230;
              </span>
            );
          }
          return (
            <PaginationItem
              key={pageNumber}
              active={currentPage === pageNumber}
              onClick={() => {
                onChange(Number(pageNumber));
              }}
            >
              {pageNumber}
            </PaginationItem>
          );
        })}
        <PaginationItem
          disabled={currentPage >= totalPages}
          onClick={() => {
            onChange(currentPage + 1);
          }}
        >
          <IoChevronForwardSharp size={14} />
        </PaginationItem>
      </div>
    </div>
  );
};

export default Pagination;
