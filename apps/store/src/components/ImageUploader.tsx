'use client';

import { Button, ButtonProps, Input, Progress } from '@mono/ui';
import { cn } from '@mono/util';
import { LucideProps, Trash2, Upload } from 'lucide-react';
import Image from 'next/image';
import { forwardRef, memo, useCallback, useRef, useState } from 'react';

interface ImageUploaderProps
  extends Omit<ButtonProps, 'onClick' | 'className' | 'onChange'> {
  imageProps?: Omit<React.ComponentProps<typeof Image>, 'src'>;
  iconProps?: LucideProps;
  className?: string;
  onChange?: (image?: string) => void;
}

const ImageUploader = forwardRef<HTMLButtonElement, ImageUploaderProps>(
  ({ imageProps, iconProps, className, onChange, ...props }, ref) => {
    const [imageUrl, setImageUrl] = useState<string>();
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let progress = 0;

        const file = e.target.files?.[0];
        if (file) {
          // Simulate upload progress
          setUploading(true);
          let uploaded = 0;

          const interval = setInterval(() => {
            if (uploaded < 100) {
              uploaded += 20;
              setProgress(uploaded);
            } else {
              clearInterval(interval);
              const url = URL.createObjectURL(file);
              setImageUrl(url);
              setUploading(false);
              setProgress(0);
              onChange?.(imageUrl);
            }
          }, 500);
        }
      },
      [],
    );

    const removeImage = useCallback(() => {
      setImageUrl(undefined);
      inputRef.current?.value && (inputRef.current.value = '');
    }, []);
    return (
      <div>
        <Button
          ref={ref}
          type="button"
          variant="ghost"
          className={cn(
            'group relative flex aspect-square h-auto w-full items-center justify-center rounded-md border p-0',
            {
              'border-dashed': !imageUrl,
            },
            className,
          )}
          onClick={() => {
            imageUrl ? removeImage() : inputRef.current?.click();
          }}
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
              <div className="hover:bg-accent/50 group-focus-visible:bg-accent/50 group/div absolute inset-0 flex h-auto w-auto items-center justify-center rounded-md opacity-0 transition-opacity ease-in-out hover:opacity-100 group-focus-visible:opacity-100">
                <Trash2 className="text-destructive opacity-0 group-hover/div:opacity-100 group-focus-visible:opacity-100" />
              </div>
            </>
          ) : (
            <>
              {!uploading ? (
                <Upload
                  {...iconProps}
                  className={cn('text-muted-foreground', iconProps?.className)}
                />
              ) : (
                <Progress value={progress} className="w-2/3" />
              )}
              <span className="sr-only">Upload</span>
            </>
          )}
        </Button>
      </div>
    );
  },
);

ImageUploader.displayName = 'ImageUploader';

export default memo(ImageUploader);
