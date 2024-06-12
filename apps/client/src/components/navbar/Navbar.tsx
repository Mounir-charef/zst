import React from 'react';
import Logo from '../../assets/icons/Logo';
import NavigationLinks from './NavigationLinks';
import { Link } from '../../navigation';

const Navbar = () => {
  return (
    <header className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-2">
      <Link href="/">
        <Logo />
      </Link>
      <NavigationLinks />
    </header>
  );
};

export default Navbar;
