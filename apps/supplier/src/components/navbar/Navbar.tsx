import { buttonVariants } from '@mono/ui';
import { ShoppingBagIcon } from 'lucide-react';
import { memo } from 'react';
import { Link } from '../../navigation';
import ThemeToggler from './ThemeToggler';

const NavBar = () => {
  return (
    <div className="bg-background text-foreground border-border fixed top-0 z-50 w-full border-b">
      <div className="mx-auto hidden h-20 w-full max-w-[1700px] items-center justify-between gap-x-6 p-4 sm:flex">
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            aria-label="home"
            className={buttonVariants({
              variant: 'ghost',
            })}
          >
            <ShoppingBagIcon className="h-8 w-8" />
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
