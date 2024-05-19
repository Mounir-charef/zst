'use client';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@mono/ui';
import { BellIcon } from '@radix-ui/react-icons';
import { CheckCheckIcon, CheckIcon } from 'lucide-react';
import { memo } from 'react';

const Notification = () => {
  return (
    <Popover>
      <PopoverTrigger
        title="notifications"
        aria-label="open notification"
        asChild
      >
        <Button variant="ghost" size="icon" className="rounded-full">
          <BellIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <span className="text-sm leading-relaxed">
                  Notification {index + 1}
                </span>
                <p className="text-muted-foreground text-xs">
                  Notification {index + 1} message
                </p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <CheckIcon className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default memo(Notification);
