'use client';

import { CustomisableAvatar, CustomisablePopover } from '@mono/ui';
import { cn, useDisclosure } from '@mono/util';
import React from 'react';
import { IconType } from 'react-icons';
import { MdLogout, MdOutlineShoppingCart } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import { Link } from '../../navigation';

const Profile = ({
  className,
  contentClassName,
}: {
  className?: string;
  contentClassName?: string;
}) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CustomisableAvatar src="/images/user-avatar.webp" />
      <div className={cn(contentClassName)}>
        <h2 className="text-sm font-semibold">John Doe</h2>
        <h3 className="text-xs text-gray-400">Super Admin</h3>
      </div>
    </div>
  );
};

const ProfileMenuLink = ({
  title,
  Icon,
  href,
  onClick,
}: {
  title: string;
  Icon: IconType;
  href?: string;
  onClick?: () => unknown;
}) => {
  return (
    <Link
      href={href || '#'}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
        }
      }}
      className="hover:text-primary flex items-center gap-2 px-3 py-2 text-sm"
    >
      <Icon />
      <span>{title}</span>
    </Link>
  );
};

const HeaderProfile = () => {
  const { isOpen, onOpen, setIsOpen } = useDisclosure();
  return (
    <>
      <div
        className="flex h-full cursor-pointer items-center border-l pl-5 lg:pr-20"
        onClick={onOpen}
      >
        <Profile contentClassName="hidden lg:block" />
      </div>

      <CustomisablePopover
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        sideOffset={36}
        side="bottom"
        align="end"
        className="w-[220px]"
      >
        <div className="border-b border-dashed p-2">
          <div className="rounded-md bg-gray-100 p-2">
            <Profile />
          </div>
        </div>
        <div className="flex flex-col px-2 py-2">
          <ProfileMenuLink
            href="/profile"
            title="Profile"
            Icon={FaUserCircle}
          />
          <ProfileMenuLink title="Create Shop" Icon={MdOutlineShoppingCart} />
          <ProfileMenuLink title="Settings" Icon={VscSettings} />
        </div>
        <div className="border-t border-dashed p-2">
          <ProfileMenuLink title="Logout" Icon={MdLogout} />
        </div>
      </CustomisablePopover>
    </>
  );
};

export default HeaderProfile;
