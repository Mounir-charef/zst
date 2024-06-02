import { Button } from '@mono/ui';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
};
const Navlink = ({ href, children }: LinkProps) => {
  return (
    <Link href={href}>
      <Button className="text-foreground bg-transparent p-0 text-sm hover:bg-transparent hover:underline hover:opacity-90">
        {children}
      </Button>
    </Link>
  );
};

export default Navlink;
