import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverContentProps,
  PopoverTrigger,
} from '../ui/popover';

interface CustomisablePopover extends PopoverContentProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const CustomisablePopover = ({
  isOpen,
  setIsOpen,
  children,
  ...props
}: CustomisablePopover) => {
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger />
      <PopoverContent {...props}>{children}</PopoverContent>
    </Popover>
  );
};
