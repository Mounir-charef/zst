'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mono/ui';
import { cn } from '@mono/util';
import { ChevronDown } from 'lucide-react';
import { memo } from 'react';
import type { NavigationMenu } from './NavMenu';
import { Link } from '../../navigation';

interface HoverMenuProps extends NavigationMenu {}

const HoverMenu = ({ children, icon, title }: HoverMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="group items-center gap-2 font-light">
          {icon} <span>{title}</span>{' '}
          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{title} Links</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {children.map((child, index) => (
          <>
            <DropdownMenuItem key={child.title} asChild>
              <Link href={child.href} aria-label={child.title}>
                {child.title}
              </Link>
            </DropdownMenuItem>
            {index !== children.length - 1 && <DropdownMenuSeparator />}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(HoverMenu);
