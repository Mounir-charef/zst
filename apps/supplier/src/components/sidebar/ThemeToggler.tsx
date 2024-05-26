'use client';

import { Button, ToggleGroup, ToggleGroupItem } from '@mono/ui';
import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';
import { memo, useCallback } from 'react';
import { useAppContext } from '../AppProvider';

const OpenedThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <ToggleGroup
      variant="filter"
      type="single"
      className="bg-muted text-muted-foreground rounded-md p-1"
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
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [resolvedTheme, setTheme]);

  return (
    <Button size="icon" variant="ghost" onClick={() => toggleTheme()}>
      {resolvedTheme === 'dark' ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  );
};

const ThemeToggler = () => {
  const { isOpen } = useAppContext();
  if (isOpen) return <OpenedThemeToggler />;

  return <ClosedThemeToggler />;
};

export default memo(ThemeToggler);
