'use client';
import { memo, useMemo } from 'react';
import { Link, usePathname } from '../../navigation';
import { cn } from '@mono/util';
import { buttonVariants } from '@mono/ui';

interface MobileNavLinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const MobileNavLink = ({ href, title, icon }: MobileNavLinkProps) => {
  const pathname = usePathname();
  const isSelected = useMemo(
    () => (href === '/' ? pathname === href : pathname.startsWith(href)),
    [pathname, href],
  );
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: isSelected ? 'reverse' : 'link',
        }),
        'justify-start gap-2 rounded-none',
        {
          'text-foreground': !isSelected,
        },
      )}
      key={title}
      href={href}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

export default memo(MobileNavLink);
