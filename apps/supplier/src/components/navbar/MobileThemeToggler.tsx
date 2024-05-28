'use client';

import { ToggleGroup, ToggleGroupItem } from '@mono/ui';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { memo } from 'react';

const MobileThemeToggler = () => {
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

export default memo(MobileThemeToggler);
