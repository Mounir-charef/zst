'use client';

import { Button, ButtonProps, Input } from '@mono/ui';
import { cn } from '@mono/util';
import { LucideProps, Upload, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { memo, useCallback, useRef, useState } from 'react';

interface ImageUploaderProps
  extends Omit<ButtonProps, 'onClick' | 'className' | 'onChange'> {
  imageProps?: Omit<React.ComponentProps<typeof Image>, 'src'>;
  iconProps?: LucideProps;
  className?: string;
  onChange?: (image: string) => void;
}

const ImageUploader = ({
  imageProps,
  iconProps,
  className,
  onChange,
  ...props
}: ImageUploaderProps) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  }, []);
  return (
    <Button
      type="button"
      variant="ghost"
      className={cn(
        'relative flex aspect-square h-auto w-full items-center justify-center rounded-md border p-0',
        {
          'border-dashed': !imageUrl,
        },
        className,
      )}
      onClick={() => inputRef.current?.click()}
      {...props}
    >
      <Input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={handleUpload}
        accept="image/*"
      />
      {imageUrl ? (
        <>
          <Image
            alt="Product image placeholder"
            className="aspect-square w-full rounded-md object-cover"
            src={imageUrl}
            height={!imageProps ? '84' : undefined}
            width={!imageProps ? '84' : undefined}
            {...imageProps}
          />
          <Button
            variant="ghost"
            className="hover:bg-accent/50 group absolute inset-0 flex h-auto w-auto items-center justify-center rounded-md opacity-0 transition-opacity ease-in-out hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              setImageUrl(undefined);
              inputRef.current?.value && (inputRef.current.value = '');
            }}
          >
            <Trash2 className="text-destructive opacity-0 group-hover:opacity-100" />
          </Button>
        </>
      ) : (
        <>
          <Upload
            {...iconProps}
            className={cn('text-muted-foreground', iconProps?.className)}
          />
          <span className="sr-only">Upload</span>
        </>
      )}
    </Button>
  );
};

export default memo(ImageUploader);
