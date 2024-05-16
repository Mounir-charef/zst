import React from 'react';
import PaginationText from './PaginationText';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@mono/ui';

interface PaginationRowsPerPageProps {
  pageSize: number;
  onPageSizeChange: (pageSize: number) => unknown;
}

const PaginationRowsPerPage = ({
  onPageSizeChange,
  pageSize,
}: PaginationRowsPerPageProps) => {
  return (
    <div className="flex items-center gap-4">
      <PaginationText text="Rows per page" />
      <Select
        value={pageSize.toString()}
        onValueChange={(value) => onPageSizeChange(parseInt(value))}
      >
        <SelectTrigger className="min-w-[70px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="30">30</SelectItem>
          <SelectItem value="40">40</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PaginationRowsPerPage;
