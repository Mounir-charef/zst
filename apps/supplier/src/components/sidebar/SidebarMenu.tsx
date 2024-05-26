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
import { memo, useState } from 'react';
import { Link } from '../../navigation';
import { useAppContext } from '../AppProvider';

export interface SidebarMenuProps {
  title: string;
  icon: React.ReactNode;
  children: {
    title: string;
    href: string;
    description: string;
  }[];
}

const OpenedSidebarMenu = ({ title, icon, children }: SidebarMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 text-sm">
      <Button
        variant="ghost"
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
  const { isOpen } = useAppContext();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          key={title}
          size={isOpen ? 'default' : 'icon'}
          variant="ghost"
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: isOpen ? 'default' : 'icon',
            }),
            'justify-center gap-2 transition-all',
          )}
        >
          {icon}
          <span className="sr-only">{title}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" className="p-0">
        <div className="flex flex-col gap-2">
          <h5 className="pt-2 text-center">{title}</h5>
          <Separator />
          {children.map((child) => (
            <Link
              key={child.title}
              href={child.href}
              title={child.description}
              className={buttonVariants({
                variant: 'ghost',
              })}
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
