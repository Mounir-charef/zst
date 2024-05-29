import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@mono/ui';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import React from 'react';

interface SharedTableActionColumnProps {
  children: React.ReactNode;
}

const SharedTableActionColumn = ({
  children,
}: SharedTableActionColumnProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">{children}</DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SharedTableActionColumn;
