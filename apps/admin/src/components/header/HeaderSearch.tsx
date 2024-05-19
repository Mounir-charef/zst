import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import Overlay from '../ui/Overlay';
import { cn, useDisclosure } from '@mono/util';
import { Input } from '@mono/ui';

const SearchField = () => {
  return (
    <div className="relative">
      <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
      <Input
        className="rounded-3xl bg-gray-50 px-5 py-2.5 pl-9"
        placeholder="Search your route..."
      />
    </div>
  );
};

const MobileSearchField = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div
        onClick={onOpen}
        className="ml-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border bg-gray-50 lg:hidden "
      >
        <IoIosSearch />
      </div>
      <div
        className={cn(
          'fixed left-0 top-0 z-10 w-full transition-all lg:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <Overlay onClick={onClose} isVisible={isOpen} />
        <div className="relative z-50 mx-auto flex h-[76px] w-full max-w-lg items-center">
          <div className="w-full">
            <SearchField />
          </div>
        </div>
      </div>
    </>
  );
};

const HeaderSearch = () => {
  return (
    <div className="w-full flex-1">
      <div className="hidden max-w-lg lg:block">
        <SearchField />
      </div>
      <MobileSearchField />
    </div>
  );
};

export default HeaderSearch;
