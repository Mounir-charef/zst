import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import Overlay from '../ui/Overlay';
import { cn, useDisclosure } from '@mono/util';
import Input from '../ui/form/input/Input';

const SearchField = () => {
  return (
    <div className="relative">
      <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
      <Input
        className="bg-gray-50 px-5 py-2.5 pl-9 rounded-3xl"
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
        className="w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center border cursor-pointer ml-auto lg:hidden"
      >
        <IoIosSearch />
      </div>
      <div
        className={cn(
          'fixed top-0 left-0 w-full transition-all lg:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <Overlay onClick={onClose} isVisible={isOpen} />
        <div className="h-[76px] mx-auto flex items-center w-full max-w-lg relative z-50">
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
      <div className="hidden lg:block max-w-lg">
        <SearchField />
      </div>
      <MobileSearchField />
    </div>
  );
};

export default HeaderSearch;
