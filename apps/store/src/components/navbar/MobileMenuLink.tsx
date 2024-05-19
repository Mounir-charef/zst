'use client';

import { Button } from '@mono/ui';
import { cn } from '@mono/util';
import { ChevronRight } from 'lucide-react';
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
        <div className="flex flex-col gap-2">
          {item.children.map((child) => (
            <Link key={child.title} href={child.href} className="p-0.5 ps-12">
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(MobileMenuLink);
