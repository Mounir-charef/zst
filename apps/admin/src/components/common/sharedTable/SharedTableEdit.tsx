import { DropdownMenuItem } from '@mono/ui';
import Link from 'next/link';
import React from 'react';

interface SharedTableEditProps {
  href: string;
}

const SharedTableEdit = ({ href }: SharedTableEditProps) => {
  return (
    <DropdownMenuItem asChild>
      <Link href={href}>Edit</Link>
    </DropdownMenuItem>
  );
};

export default SharedTableEdit;
