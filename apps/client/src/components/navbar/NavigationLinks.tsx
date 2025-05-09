import { Button } from '@mono/ui';
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Navlink from './Navlink';
import UserNav from './UserNav';
import { auth } from '../../lib/auth/auth';

const NavigationLinks = async () => {
  const session = await auth();
  return (
    <nav className="p flex items-center gap-4">
      <Navlink href="/#">
        <Heart size={16} />
      </Navlink>
      <Navlink href="/#">
        <ShoppingCart size={16} />
      </Navlink>
      <Navlink href="/#">Help Center</Navlink>
      <Navlink href="/onboarding">Sell your product</Navlink>
      {session?.user ? (
        <UserNav />
      ) : (
        <>
          <Link href="/sign-up">
            <Button variant="main">Sign up</Button>
          </Link>
          <Link href="/sign-in">
            <Button variant="alt">Log in</Button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavigationLinks;
