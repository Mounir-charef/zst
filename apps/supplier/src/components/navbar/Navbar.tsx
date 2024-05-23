'use client';

import { buttonVariants } from '@mono/ui';
import { cn } from '@mono/util';
import Image from 'next/image';
import { memo } from 'react';
import { Link } from '../../navigation';
import { useAppContext } from '../AppProvider';
import ThemeToggler from './ThemeToggler';

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
              height={80}
              alt="Brand"
              priority
              quality={100}
              className="hidden dark:block"
            />
            <Image
              src="/Brand.png"
              width={80}
              height={80}
              alt="Brand"
              priority
              quality={100}
              className="dark:hidden"
            />
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};

export default memo(NavBar);
