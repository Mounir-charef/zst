'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  buttonVariants,
} from '@mono/ui';
import { cn } from '@mono/util';
import { memo } from 'react';
import { Link } from '../../navigation';
import { useAppContext } from '../AppProvider';

export interface SidebarLinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const SidebarLink = ({ href, icon, title }: SidebarLinkProps) => {
  const { isOpen } = useAppContext();

  if (isOpen) {
    return (
      <Link
        key={title}
        href={href}
        className={cn(
          buttonVariants({
            variant: 'ghost',
          }),
          'justify-start gap-2 truncate transition-all',
        )}
      >
        {icon}
        <span className="truncate text-sm">{title}</span>
      </Link>
    );
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          key={title}
          href={href}
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: 'icon',
            }),
            'justify-center gap-2 transition-all',
          )}
        >
          {icon}
          <span className="sr-only">{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default memo(SidebarLink);
