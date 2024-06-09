import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from '@mono/ui';
import { Trash2, Upload } from 'lucide-react';
import Image from 'next/image';
import { memo, useCallback, useRef } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ImageUploaderField } from '../../ImageUploaderField';
import { IProductDetails } from '../../../validation/add-product-schema';
const ProductImages = () => {
  const { control, watch } = useFormContext<IProductDetails>();
  const productImages = watch('productImages');
  const { append, remove } = useFieldArray({
    control,
    name: 'productImages',
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files?.length) {
        const images = Array.from(files).map((file) => {
          return {
            id: productImages
              ? productImages.length + file.name
              : 1 + file.name,
            url: URL.createObjectURL(file),
          };
        });
        append(images);
        // reset the input field
        e.target.value = '';
      }
    },
    [productImages],
  );
  return (
    <Card
      className="overflow-hidden"
      x-chunk="A card with a form to upload product images"
    >
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <ImageUploaderField
            control={control}
            name="mainImage"
            shouldUnregister
          />
          <div className="grid grid-cols-3 gap-2">
            {productImages?.map((image, index) => (
              <Button
                type="button"
                variant="ghost"
                className="text-muted-foreground group relative flex aspect-square h-auto w-full items-center justify-center rounded-md border p-0"
                key={image.id}
                onClick={() => remove(index)}
              >
                <Image
                  alt="Product image placeholder"
                  className="aspect-square w-full rounded-md object-cover"
                  src={image.url}
                  height={84}
                  width={84}
                />
                <div className="hover:bg-accent/50 group-focus-visible:bg-accent/50 group/div absolute inset-0 flex h-auto w-auto items-center justify-center rounded-md opacity-0 transition-opacity ease-in-out hover:opacity-100 group-focus-visible:opacity-100">
                  <Trash2 className="text-destructive opacity-0 group-hover/div:opacity-100 group-focus-visible:opacity-100" />
                </div>
              </Button>
            ))}

            <Button
              type="button"
              variant="ghost"
              className="text-muted-foreground group relative flex aspect-square h-auto w-full items-center justify-center rounded-md border p-0"
              onClick={() => inputRef.current?.click()}
            >
              <Input
                type="file"
                ref={inputRef}
                className="hidden"
                onChange={handleUpload}
                accept="image/*"
                multiple
              />
              <Upload className="text-muted-foreground h-4 w-4" />
              <span className="sr-only">Upload</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(ProductImages);
