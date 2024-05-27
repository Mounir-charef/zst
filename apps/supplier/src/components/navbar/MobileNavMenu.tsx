'use client';

import { Button, buttonVariants } from '@mono/ui';
import { cn } from '@mono/util';
import { ChevronRight, DotIcon } from 'lucide-react';
import { memo, useMemo, useState } from 'react';
import { Link, usePathname } from '../../navigation';
import { NavigationMenu } from '../../types/navigation';

const MobileNavMenu = (item: NavigationMenu) => {
  const pathname = usePathname();
  const isSelected = useMemo(
    () => item.children.some((child) => child.href === pathname),
    [item.children, pathname],
  );
  const [isOpen, setIsOpen] = useState(isSelected);

  return (
    <div className="flex flex-col gap-2 text-sm">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className={cn('justify-start gap-2', {
          'bg-muted': isOpen,
        })}
      >
        <ChevronRight
          className={cn('h-4 w-4 transition-transform', {
            'rotate-90': isOpen,
          })}
        />
        <span>{item.title}</span>
      </Button>
      {isOpen && (
        <div className="animate-in slide-in-from-top-5 fade-in-20 flex flex-col gap-2 ps-4">
          {item.children.map((child) => (
            <Link
              href={child.href}
              className={cn(
                buttonVariants({
                  variant: pathname === child.href ? 'reverse' : 'link',
                }),
                'justify-start gap-2',
                {
                  'text-foreground': pathname !== child.href,
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

export default memo(MobileNavMenu);
