import { Input } from '@mono/ui';
import React from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { IoIosSearch } from 'react-icons/io';
import HeaderProfile from './HeaderProfile';

const Header = () => {
  return (
    <header className="ml-[280px] h-[76px] bg-white border-b sticky top-0 px-8 flex items-center">
      <div className="flex items-center gap-6 flex-1">
        <CgMenuLeft
          className="hover:text-primary cursor-pointer transition-all"
          size={28}
        />
        <div className="relative w-full flex-1 max-w-lg">
          <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            className="bg-gray-50 px-5 py-2.5 pl-9 rounded-3xl"
            placeholder="Search your route..."
          />
        </div>
      </div>
      <HeaderProfile />
    </header>
  );
};

export default Header;
