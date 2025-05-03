'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
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
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { NavItems, userMenuLinks } from '../../config';
import { nameToSlug } from '../../lib/utils';
import { Link } from '../../navigation';
import LogoutButton from '../LogoutButton';
import MobileMenuLink from './MobileMenuLink';

const MobileNavMenu = () => {
  const locale = useLocale();
  const session = useSession();

  if (!session.data?.user) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger aria-label="mobile-navbar" asChild>
        <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
          <Avatar>
            <AvatarImage
              src={session.data.user.image}
              alt={session.data.user.name!}
            />
            <AvatarFallback>
              {nameToSlug(session.data.user.name!)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </SheetTrigger>
      <SheetContent className="px-2" side={locale === 'ar' ? 'right' : 'left'}>
        <SheetHeader className="items-center py-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={session.data.user.image}
                alt={session.data.user.name!}
              />
              <AvatarFallback>
                {nameToSlug(session.data.user.name!)}
              </AvatarFallback>
            </Avatar>
            <SheetTitle>{session.data.user.name!}</SheetTitle>
          </div>
          <SheetDescription>{session.data.user.email}</SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col gap-2 divide-y py-6">
          {userMenuLinks
            .filter((item) => !item)
            .map((item) => (
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
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          {NavItems.map((item) => {
            if (item.type === 'link') {
              return (
                <Link
                  key={item.title}
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

          <LogoutButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavMenu;
