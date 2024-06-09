'use client';

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
} from '@mono/ui';

import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, memo, useCallback, useState } from 'react';
import products from '../../../../../../lib/data/products/products.json';
import { IProductDetails } from '../../../../../../validation/add-product-schema';
import ProductSelectionList from './ProductSelectionList';

interface SelectProductDialogProps {
  setDefaultValues: Dispatch<SetStateAction<IProductDetails>>;
}

const SelectProductDialog = ({
  setDefaultValues,
}: SelectProductDialogProps) => {
  const [selectedProduct, setSelectedProduct] = useState<
    number | string | undefined
  >(undefined);
  const [open, setOpen] = useState(false);

  const { data: product, isLoading } = useQuery({
    queryKey: ['products', selectedProduct],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return products.find((product) => product.id === selectedProduct);
    },
    enabled: !!selectedProduct,
    staleTime: Infinity,
  });

  const changeProduct = useCallback(
    (productId: number | string) => {
      if (selectedProduct === productId) {
        setSelectedProduct(undefined);
      } else {
        setSelectedProduct(productId);
      }
    },
    [selectedProduct],
  );

  const onConfirm = useCallback(() => {
    if (!product) return;
    setDefaultValues((prev) => ({
      ...prev,
      details: {
        name: product.name,
        description: product.created_at,
      },
    }));
    setOpen(false);
  }, [product, setDefaultValues]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" type="button">
          Select Product
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl divide-y">
        <DialogHeader>
          <DialogTitle>Select product</DialogTitle>
          <DialogDescription>
            The product details will be automatically filled when you select an
            existing product
          </DialogDescription>
        </DialogHeader>

        <ProductSelectionList
          selectedProduct={selectedProduct}
          changeProduct={changeProduct}
        />

        <DialogFooter className="flex justify-end gap-2 pt-6">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button" onClick={onConfirm} disabled={!product}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(SelectProductDialog);
