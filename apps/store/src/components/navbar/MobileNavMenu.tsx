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
  buttonVariants,
} from '@mono/ui';
import { cn } from '@mono/util';
import { Link2 } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { NavItems, useMenuLinks } from '../../config';
import useSession from '../../hooks/useSession';
import { logout } from '../../lib/auth/logout';
import { nameToSlug } from '../../lib/utils';
import { Link } from '../../navigation';
import MobileMenuLink from './MobileMenuLink';

const MobileNavMenu = () => {
  const locale = useLocale();
  const session = useSession();
  const [isPending, startTransition] = useTransition();

  if (!session) {
    return null;
  }
  return (
    <Sheet>
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
      <SheetContent side={locale === 'ar' ? 'right' : 'left'}>
        <SheetHeader className="py-6 text-start">
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
        <div className="flex flex-col gap-2 divide-y py-6">
          {useMenuLinks.map((item) => (
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
                'text-foreground justify-start gap-2',
              )}
              key={item.label}
              href={item.href}
            >
              <Link2 className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
          {NavItems.map((item) => {
            if (item.type === 'link') {
              return (
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({
                      variant: 'link',
                    }),
                    'text-foreground justify-start gap-2',
                  )}
                >
                  {item.icon} <span>{item.title}</span>
                </Link>
              );
            }
            return <MobileMenuLink key={item.title} {...item} />;
          })}

          <Button
            variant="link"
            isLoading={isPending}
            onClick={() => startTransition(logout)}
            className="text-foreground justify-start"
          >
            Sign out
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
