import { Copy } from 'lucide-react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from '@mono/ui';

import { memo } from 'react';

interface SelectProductDialogProps {}

const SelectProductDialog = ({}: SelectProductDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" type="button">
          Select Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select product</DialogTitle>
          <DialogDescription>
            The product details will be automatically filled when you select an
            existing product
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 p-4"></div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(SelectProductDialog);
