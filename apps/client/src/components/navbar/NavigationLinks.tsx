import React from 'react';
import Navlink from './Navlink';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@mono/ui';
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
      <Button variant="main">Sign up</Button>
      <Button variant="alt">Sign up</Button>
    </nav>
  );
};

export default NavigationLinks;
