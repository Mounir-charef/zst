'use client';

import { CustomisableAvatar, CustomisablePopover } from '@mono/ui';
import { useDisclosure } from '@mono/util';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { MdLogout, MdOutlineShoppingCart } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';

const Profile = () => {
  return (
    <div className="flex items-center gap-2">
      <CustomisableAvatar src="/images/user-avatar.webp" />
      <div>
        <h2 className="font-semibold text-sm">John Doe</h2>
        <h3 className="text-gray-400 text-xs">Super Admin</h3>
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
      className="flex items-center gap-2 px-3 py-2 text-sm hover:text-primary"
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
        className="border-l pl-6 h-full flex items-center pr-20 cursor-pointer"
        onClick={onOpen}
      >
        <Profile />
      </div>

      <CustomisablePopover
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        side="bottom"
        align="end"
        className="w-[220px]"
      >
        <div className="p-2 border-b border-dashed">
          <div className="bg-gray-100 p-2 rounded-md">
            <Profile />
          </div>
        </div>
        <div className="flex flex-col px-2 py-2">
          <ProfileMenuLink title="Profile" Icon={FaUserCircle} />
          <ProfileMenuLink title="Create Shop" Icon={MdOutlineShoppingCart} />
          <ProfileMenuLink title="Settings" Icon={VscSettings} />
        </div>
        <div className="p-2 border-t border-dashed">
          <ProfileMenuLink title="Logout" Icon={MdLogout} />
        </div>
      </CustomisablePopover>
    </>
  );
};

export default HeaderProfile;
