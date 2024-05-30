import { DropdownMenuItem } from '@mono/ui';
import Link from 'next/link';
import React from 'react';

interface SharedTableViewProps {
  href: string;
}

const SharedTableView = ({ href }: SharedTableViewProps) => {
  return (
    <DropdownMenuItem asChild>
      <Link href={href}>View</Link>
    </DropdownMenuItem>
  );
};

export default SharedTableView;
