'use client';

import { Button, buttonVariants } from '@mono/ui';
import { cn } from '@mono/util';
import { ChevronRight, DotIcon } from 'lucide-react';
import { memo, useState } from 'react';
import { Link } from '../../navigation';
import { NavigationMenu } from './NavMenu';

const MobileMenuLink = (item: NavigationMenu) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 text-sm">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="justify-start gap-2"
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

export default memo(MobileMenuLink);
