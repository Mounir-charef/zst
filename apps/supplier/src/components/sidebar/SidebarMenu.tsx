'use client';

import {
  Button,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  buttonVariants,
} from '@mono/ui';
import { cn } from '@mono/util';
import { ChevronRight, DotIcon } from 'lucide-react';
import { memo, useMemo, useState } from 'react';
import { Link, usePathname } from '../../navigation';
import { NavigationMenu } from '../../types/navigation';
import { useAppContext } from '../AppProvider';

type SidebarMenuProps = Omit<NavigationMenu, 'type'>;

const OpenedSidebarMenu = ({ title, icon, children }: SidebarMenuProps) => {
  const pathname = usePathname();
  const isSelected = useMemo(
    () => children.some((child) => child.href === pathname),
    [children, pathname],
  );
  const [isOpen, setIsOpen] = useState(isSelected);
  return (
    <div className="flex flex-col gap-2 text-sm">
      <Button
        variant={isSelected ? 'reverse' : 'ghost'}
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </div>
        <ChevronRight
          className={cn('h-4 w-4 transition-transform', {
            'rotate-90 transform': isOpen,
          })}
        />
      </Button>
      {isOpen && (
        <div className="animate-in slide-in-from-top-5 fade-in-20 flex flex-col gap-2 ps-4">
          {children.map((child) => (
            <Link
              href={child.href}
              title={child.description}
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
                'text-foreground justify-start gap-2',
                {
                  'bg-muted': child.href === pathname,
                },
              )}
            >
              <DotIcon className="h-4 w-4" /> <span>{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const ClosedSidebarMenu = ({ title, icon, children }: SidebarMenuProps) => {
  const pathname = usePathname();
  const isSelected = useMemo(
    () => children.some((child) => child.href === pathname),
    [children, pathname],
  );
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          key={title}
          size="icon"
          variant={isSelected ? 'reverse' : 'ghost'}
          className="justify-center gap-2 transition-all"
        >
          {icon}
          <span className="sr-only">{title}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" className="px-0">
        <div className="flex flex-col gap-2">
          <h5 className="text-center">{title}</h5>
          <Separator />
          {children.map((child) => (
            <Link
              key={child.title}
              href={child.href}
              title={child.description}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'mx-1',
                {
                  'bg-muted': child.href === pathname,
                },
              )}
            >
              {child.title}
            </Link>
          ))}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

const SidebarMenu = (item: SidebarMenuProps) => {
  const { isOpen } = useAppContext();
  if (isOpen) return <OpenedSidebarMenu {...item} />;

  return <ClosedSidebarMenu {...item} />;
};

export default memo(SidebarMenu);
