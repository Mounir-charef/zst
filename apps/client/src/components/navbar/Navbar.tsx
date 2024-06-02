import React from 'react';
import Logo from '../../assets/icons/Logo';
import NavigationLinks from './NavigationLinks';
import { Link } from '../../navigation';

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between p-4 px-6">
      <Link href="/">
        <Logo />
      </Link>
      <NavigationLinks />
    </header>
  );
};

export default Navbar;
