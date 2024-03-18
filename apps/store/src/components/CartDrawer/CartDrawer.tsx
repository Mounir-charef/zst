'use client';

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@mono/ui';
import { cn } from '@mono/util';
import { ShoppingBag } from 'lucide-react';
import React from 'react';

const CartDrawer = () => {
  const items = 10;
  const cost = 584214;
  return (
    <Drawer direction="right" shouldScaleBackground={false}>
      <DrawerTrigger className="fixed flex flex-col gap-2 items-center right-0 top-[50%] z-40 bg-primary  rounded-s-md p-4 text-primary-foreground">
        <div className="flex gap-2 items-center ">
          <ShoppingBag size={16} />
          {items} items
        </div>

        <p className="rounded bg-primary-foreground text-primary px-2">
          ${cost}
        </p>
      </DrawerTrigger>
      <DrawerContent
        drawerHandleVisible={false}
        className={cn('h-full w-[400px] rounded-none inset-x-auto right-0 ')}
      >
        <DrawerHeader className="text-left flex justify-between">
          <DrawerTitle>Items</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter className="pt-2">Checkout</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
