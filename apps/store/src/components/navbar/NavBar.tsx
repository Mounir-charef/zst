import { buttonVariants } from '@mono/ui';
import Image from 'next/image';
import { memo } from 'react';
import { Link } from '../../navigation';
import NavMenu from './NavMenu';
import Notification from './Notification';
import ThemeToggle from './ThemeToggle';
import UserNav from './UserNav';

const NavBar = () => {
  return (
    <div className="bg-background text-foreground border-border dark fixed top-0 z-50 w-full border-b">
      <div className="mx-auto hidden h-20 w-full max-w-[1700px] items-center justify-between gap-x-6 p-4 md:flex">
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            aria-label="home"
            className={buttonVariants({
              variant: 'ghost',
            })}
          >
            <Image
              src="/Brand.png"
              width={80}
              height={80}
              alt="Brand"
              priority
              quality={100}
            />
          </Link>
          <NavMenu />
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Notification />
          <UserNav />
        </div>
      </div>

      {/* mobile navbar */}
      <div className="flex items-center justify-between p-4 md:hidden">
        <Link
          href="/"
          aria-label="home"
          className={buttonVariants({
            variant: 'ghost',
          })}
        >
          <Image
            src="/Brand.png"
            width={80}
            height={80}
            alt="Brand"
            priority
            quality={100}
          />
        </Link>
        <UserNav />
      </div>
    </div>
  );
};

export default memo(NavBar);
