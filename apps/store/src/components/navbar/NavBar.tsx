import { memo } from 'react';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  return (
    <div className="w-full border-b">
      <div className="mx-auto hidden h-20 w-full max-w-7xl items-center justify-between gap-x-6 p-6 sm:flex lg:px-8">
        NavBar
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default memo(NavBar);
