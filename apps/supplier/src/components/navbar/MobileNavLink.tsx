'use client';
import { memo } from 'react';
import { Link, usePathname } from '../../navigation';
import { cn } from '@mono/util';
import { buttonVariants } from '@mono/ui';

interface MobileNavLinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const MobileNavLink = (item: MobileNavLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: 'link',
        }),
        'text-foreground justify-start gap-2',
        {
          'bg-muted': pathname === item.href,
        },
      )}
      key={item.title}
      href={item.href}
    >
      {item.icon}
      <span>{item.title}</span>
    </Link>
  );
};

export default memo(MobileNavLink);
