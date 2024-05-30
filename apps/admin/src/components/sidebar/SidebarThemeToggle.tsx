'use client';

import { Button, ToggleGroup, ToggleGroupItem } from '@mono/ui';
import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';
import { memo, useCallback } from 'react';
import { useAppContext } from '../../contexts/appContext';
import themeConfig from '../../config/themeConfig';

const OpenedThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <ToggleGroup
      variant="filter"
      type="single"
      className="bg-muted text-muted-foreground w-full rounded-md p-1"
      value={resolvedTheme}
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
    >
      <ToggleGroupItem
        className="flex w-full items-center gap-2"
        size="sm"
        value="light"
      >
        <Sun className="h-4 w-4" /> <span>Light</span>
      </ToggleGroupItem>
      <ToggleGroupItem
        className="flex w-full items-center gap-2"
        size="sm"
        value="dark"
      >
        <Moon className="h-4 w-4" /> <span>Dark</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

const ClosedThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    if (theme === themeConfig.DARK) {
      setTheme(themeConfig.LIGHT);
    } else {
      setTheme(themeConfig.DARK);
    }
  }, [theme, setTheme]);

  return (
    <Button
      className="mt-2"
      size="icon"
      variant="secondary"
      onClick={() => toggleTheme()}
    >
      {theme === themeConfig.DARK ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  );
};

const SidebarThemeToggler = () => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();
  return (
    <div className="sticky bottom-0 flex justify-center px-5 pb-2">
      <div className="contents lg:hidden">
        <OpenedThemeToggler />
      </div>
      <div className="hidden lg:contents">
        {!isCollapsed ? <OpenedThemeToggler /> : <ClosedThemeToggler />}
      </div>
    </div>
  );
};

export default memo(SidebarThemeToggler);
