'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@mono/ui';
import { Moon, Sun, SunMoonIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { memo, useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="bg-inherit text-inherit hover:bg-inherit hover:text-inherit"
        >
          {!isClient || theme === 'system' ? (
            <SunMoonIcon className="[1.2rem] w-[1.2rem]" />
          ) : theme === 'dark' ? (
            <Moon className="h-[1.2rem] w-[1.2rem] " />
          ) : (
            <Sun className="absolute h-[1.2rem] " />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(ThemeToggle);
