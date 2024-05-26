'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  buttonVariants,
} from '@mono/ui';
import { cn } from '@mono/util';
import { memo } from 'react';
import { Link, usePathname } from '../../navigation';
import { useAppContext } from '../AppProvider';
import { NavigationLink } from '../../types/navigation';

type SidebarLinkProps = Omit<NavigationLink, 'type'>;

const SidebarLink = ({ href, icon, title }: SidebarLinkProps) => {
  const { isOpen } = useAppContext();
  const pathname = usePathname();

  if (isOpen) {
    return (
      <Link
        key={title}
        href={href}
        className={cn(
          buttonVariants({
            variant: pathname === href ? 'reverse' : 'ghost',
          }),
          'justify-start',
        )}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="truncate text-sm">{title}</span>
        </div>
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
              variant: pathname === href ? 'reverse' : 'ghost',
              size: 'icon',
            }),
            'justify-center',
          )}
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="sr-only">{title}</span>
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default memo(SidebarLink);
