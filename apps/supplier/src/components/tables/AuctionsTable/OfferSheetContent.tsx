import {
  Button,
  Input,
  SheetClose,
  SheetFooter,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  renderStatus,
} from '@mono/ui';
import { Clock2Icon, DollarSignIcon, StoreIcon } from 'lucide-react';
import Image from 'next/image';
import { memo } from 'react';

const offerData = [
  {
    variations: ['black', 'S'],
    price: 600.8,
    quantity: 100,
  },
  {
    variations: ['Yellow', 'S'],
    price: 600.8,
    quantity: 100,
  },
  {
    variations: ['Yellow', 'M'],
    price: 600.8,
    quantity: 100,
  },
  {
    variations: ['Yellow', 'L'],
    price: 600.8,
    quantity: 100,
  },
  {
    variations: ['Yellow', 'XL'],
    price: 600.8,
    quantity: 100,
  },
] as const;

const ProductDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-lg font-medium">Product details</h5>
      <div className="bg-accent flex items-center gap-8 rounded-md p-2">
        <Image
          src="/product/mainImage.png"
          alt="image"
          width={100}
          height={100}
          className="size-[100px] rounded-lg object-cover"
        />
        <div className="flex-1 space-y-2">
          <h3 className="font-medium">Product title go here</h3>
          {renderStatus('pending')}
          <div className="flex flex-1 flex-col gap-2 border-s-4 ps-4 text-xs">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1.5">
                <div className="text-muted-foreground flex items-center gap-0.5 whitespace-nowrap">
                  <DollarSignIcon
                    size={12}
                    className="bg-muted-foreground stroke-background rounded-sm"
                  />
                  Price
                </div>
                <span className="font-medium">{`${200}$ - ${1500}$`}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="text-muted-foreground flex items-center gap-0.5 whitespace-nowrap">
                  <StoreIcon size={12} className="stroke-muted-foreground" />
                  Quantity
                </div>
                <span className="font-medium">{`${300} - ${3000}`}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-muted-foreground flex items-center gap-1.5 whitespace-nowrap">
                <Clock2Icon size={12} />
                Created
              </div>
              <span className="font-medium">02-03-2024 12:32:01 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OfferDetails = () => {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow className="divide-x">
          <TableHead>Variations needs</TableHead>
          <TableHead>Price need</TableHead>
          <TableHead>Quantity need</TableHead>
          <TableHead>Price offered</TableHead>
          <TableHead>Quantity Available</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {offerData.map((row) => (
          <TableRow className="divide-x" key={row.variations.join('')}>
            <TableCell>{row.variations.join(', ')}</TableCell>
            <TableCell>{`$${row.price}`}</TableCell>
            <TableCell>{`${row.quantity} pieces`}</TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const OfferSheetContent = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex h-full flex-1 flex-col gap-4 p-6">
        <ProductDetails />
        <OfferDetails />
      </div>
      <SheetFooter className="flex flex-col gap-2 border-t p-6 shadow-2xl shadow-black sm:flex-col sm:space-x-0">
        <SheetClose asChild>
          <Button variant="success" size="lg">
            Place Order
          </Button>
        </SheetClose>
      </SheetFooter>
    </div>
  );
};

export default memo(OfferSheetContent);
