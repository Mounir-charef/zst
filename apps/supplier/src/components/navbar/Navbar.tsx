'use client';

import { buttonVariants } from '@mono/ui';
import { cn } from '@mono/util';
import Image from 'next/image';
import { memo } from 'react';
import { Link } from '../../navigation';
import { useAppContext } from '../AppProvider';
import UserNav from './UserNav';
import Notifications from './Notifications';
import dynamic from 'next/dynamic';

const MobileNavMenu = dynamic(() => import('./MobileNavMenu'));

const NavBar = () => {
  const { isOpen } = useAppContext();
  return (
    <div
      className={cn(
        'bg-background sticky top-0 z-50 border-b transition-[margin] md:ms-14',
        {
          'md:ms-64': isOpen,
        },
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1700px] items-center justify-between gap-x-6 p-2 md:p-4">
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
              height={40}
              alt="Brand"
              priority
              quality={100}
              className="hidden h-10 w-20 dark:block"
            />
            <Image
              src="/Brand-light.png"
              width={80}
              height={40}
              alt="Brand"
              priority
              quality={100}
              className="h-10 w-20 dark:hidden"
            />
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Notifications />
          <UserNav />
        </div>

        <MobileNavMenu />
      </div>
    </div>
  );
};

export default memo(NavBar);
