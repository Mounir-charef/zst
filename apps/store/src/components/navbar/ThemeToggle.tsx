'use client';

import { useTheme } from 'next-themes';
import { memo } from 'react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@mono/ui';
import { Moon, Sun, SunMoon } from 'lucide-react';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          {document === undefined ? (
            <SunMoon className="h-[1.2rem] w-[1.2rem] " />
          ) : resolvedTheme === 'dark' ? (
            <Moon className="h-[1.2rem] w-[1.2rem] " />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] " />
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
