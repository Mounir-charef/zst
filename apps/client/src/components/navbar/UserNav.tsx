'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mono/ui';
import { Loader2Icon, LogOutIcon } from 'lucide-react';
import { memo, useCallback, useTransition } from 'react';
import { userMenuLinks } from '../../config';
import useSession from '../../hooks/useSession';
import { logout } from '../../lib/auth/logout';
import { nameToSlug } from '../../lib/utils';
import { Link, useRouter } from '../../navigation';

const UserNav = () => {
  const router = useRouter();
  const session = useSession();
  const user = session?.user;
  const [isPending, startTransition] = useTransition();

  const signOut = useCallback(async () => {
    await logout();
    router.refresh();
  }, [router]);

  if (!user) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatar} alt="@shadcn" />
            <AvatarFallback>{nameToSlug(user.username)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.username}</p>
            <p className="text-muted-foreground text-xs leading-none">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {userMenuLinks.map((item) => (
            <DropdownMenuItem key={item.label} asChild>
              <Link href={item.href} className="w-full cursor-pointer">
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => startTransition(signOut)}
          className="cursor-pointer"
        >
          <span>Sign out</span>{' '}
          {isPending ? (
            <Loader2Icon className="ms-2 h-4 w-4 animate-spin" />
          ) : (
            <LogOutIcon className="ms-2 h-4 w-4" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(UserNav);
