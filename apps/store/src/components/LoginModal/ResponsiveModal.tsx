'use client';

import { DialogProps } from '@radix-ui/react-dialog';
import { HTMLAttributes, ReactNode, useState } from 'react';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@mono/ui';
import { useMediaQuery } from 'usehooks-ts';

interface ResponsiveModelProps extends DialogProps {
  children: ReactNode;
  trigger: string | ReactNode;
  title?: string;
  description?: string;
  footer?: string;
  triggerProps?: HTMLAttributes<HTMLButtonElement>;
  headerProps?: HTMLAttributes<HTMLDivElement>;
  footerProps?: HTMLAttributes<HTMLDivElement>;
  className?: string;
}

export const ResponsiveModel = ({
  children,
  trigger,
  description,
  title,
  footer,
  className,
  footerProps,
  headerProps,
  triggerProps,
  ...props
}: ResponsiveModelProps) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen} {...props}>
        <DialogTrigger
          {...triggerProps}
          className={
            'h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90'
          }
        >
          {trigger}
        </DialogTrigger>
        <DialogContent className={className}>
          <DialogHeader {...headerProps}>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          {children}
          {footer && (
            <DialogFooter {...footerProps}>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} {...props}>
      <DrawerTrigger {...triggerProps}>{trigger}</DrawerTrigger>
      <DrawerContent className={className}>
        {title || description ? (
          <DrawerHeader {...headerProps} className="text-left">
            {title && <DrawerTitle>{title}</DrawerTitle>}
            {description && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
          </DrawerHeader>
        ) : null}
        <div className="px-5">{children}</div>
        {footer && (
          <DrawerFooter {...footerProps} className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">{footer}</Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};
