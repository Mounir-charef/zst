import React from 'react';
import Logo from '../../assets/icons/Logo';
import NavigationLinks from './NavigationLinks';

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between p-4 px-6">
      <Logo />
      <NavigationLinks />
    </header>
  );
};

export default Navbar;
