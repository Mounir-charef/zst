import React from 'react';
import Navlink from './Navlink';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@mono/ui';
import Link from 'next/link';
const NavigationLinks = () => {
  return (
    <nav className="p flex items-center gap-4">
      <Navlink href="/#">
        <Heart size={16} />
      </Navlink>
      <Navlink href="/#">
        <ShoppingCart size={16} />
      </Navlink>
      <Navlink href="/#">Help Center</Navlink>
      <Navlink href="/#">Sell your product</Navlink>
      <Link href="/sign-up">
        <Button variant="main">Sign up</Button>
      </Link>
      <Link href="/sign-in">
        <Button variant="alt">Log in</Button>
      </Link>
    </nav>
  );
};

export default NavigationLinks;
