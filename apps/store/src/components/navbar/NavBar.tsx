import Image from 'next/image';
import { memo } from 'react';
import { Link } from '../../navigation';
import ThemeToggle from './ThemeToggle';
import Notification from './Notification';
import { buttonVariants } from '@mono/ui';

const NavBar = () => {
  return (
    <div className="w-full border-b">
      <div className="mx-auto hidden h-20 w-full max-w-7xl items-center justify-between gap-x-6 p-4 sm:flex lg:px-8">
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
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default memo(NavBar);
