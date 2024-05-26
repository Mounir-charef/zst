'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@mono/ui';
import { cn } from '@mono/util';
import { LogOutIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useEffect, useState, useTransition } from 'react';
import useSession from '../../hooks/useSession';
import { logout } from '../../lib/auth/logout';
import { nameToSlug } from '../../lib/utils';
import MobileMenuNavigation from './MobileMenuNavigation';
import { usePathname } from '../../navigation';
import MobileThemeToggler from './MobileThemeToggler';

const MobileNavMenu = () => {
  const session = useSession();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  // close the sidebar when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (!session.user) {
    return null;
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="mobile-navbar" asChild>
        <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
          <Avatar>
            <AvatarImage
              src={session.user.avatar}
              alt={session.user.username}
            />
            <AvatarFallback>{nameToSlug(session.user.username)}</AvatarFallback>
          </Avatar>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-auto px-2" side="left">
        <SheetHeader className="items-center py-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={session.user.avatar}
                alt={session.user.username}
              />
              <AvatarFallback>
                {nameToSlug(session.user.username)}
              </AvatarFallback>
            </Avatar>
            <SheetTitle>{session.user.username}</SheetTitle>
            <Badge>{session.user.role}</Badge>
          </div>
          <SheetDescription>{session.user.email}</SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex flex-grow flex-col gap-2 divide-y">
          <MobileMenuNavigation />

          <Button
            variant="link"
            isLoading={isPending}
            onClick={() => startTransition(logout)}
            className="text-foreground justify-start gap-2"
          >
            <LogOutIcon
              className={cn('h-4 w-4', {
                hidden: isPending,
              })}
            />{' '}
            Sign out
          </Button>
        </div>
        <MobileThemeToggler />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
