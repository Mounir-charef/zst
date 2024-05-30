'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mono/ui';
import { Loader2, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { VscSettings } from 'react-icons/vsc';
import useSession from '../hooks/useSession';
import UserAvatar from './UserAvatar';

const UserMenu = () => {
  const [loading, setLoading] = useState(false);
  const { data } = useSession();

  if (!data) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full" asChild>
        <Button variant="ghost" className="h-full gap-2 rounded-none border-x">
          <UserAvatar className="h-8 w-8 cursor-pointer" user={data.user} />
          <div className="flex flex-col items-start">
            <span className="text-foreground text-sm font-semibold">
              {data.user.username}
            </span>
            <span className="text-muted-foreground text-sm">
              {data.user.email}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-44">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link className="self-center" href="/profile">
              <FaUserCircle className="me-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link className="self-center" href="#">
              <MdOutlineShoppingCart className="me-2 h-4 w-4" />
              <span>Create Shop</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link className="self-center" href="#">
              <VscSettings className="me-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(e) => {
            e.preventDefault();
            setLoading(true);
            signOut();
          }}
        >
          <span>Sign out</span>{' '}
          {loading ? (
            <Loader2 className="ms-2 h-4 w-4 animate-spin" />
          ) : (
            <LogOut className="ms-2 h-4 w-4" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
