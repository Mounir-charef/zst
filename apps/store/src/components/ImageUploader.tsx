'use client';

import { Button, ButtonProps, Input, Progress } from '@mono/ui';
import { cn } from '@mono/util';
import { LucideProps, Trash2, Upload } from 'lucide-react';
import Image from 'next/image';
import { forwardRef, useCallback, useRef, useState } from 'react';

interface ImageUploaderProps
  extends Omit<ButtonProps, 'onClick' | 'className' | 'onChange' | 'value'> {
  imageProps?: Omit<React.ComponentProps<typeof Image>, 'src'>;
  iconProps?: LucideProps;
  className?: string;
  onChange: (image?: string) => void;
  value: string | undefined;
}

const ImageUploader = forwardRef<HTMLButtonElement, ImageUploaderProps>(
  ({ imageProps, iconProps, className, onChange, value, ...props }, ref) => {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
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
              setUploading(false);
              setProgress(0);
              onChange(url);
            }
          }, 500);
        }
      },
      [],
    );

    const removeImage = useCallback(() => {
      onChange();
      inputRef.current?.value && (inputRef.current.value = '');
    }, []);
    return (
      <div>
        <Button
          ref={ref}
          type="button"
          variant="ghost"
          className={cn(
            'text-muted-foreground group relative flex aspect-square h-auto w-full items-center justify-center rounded-md border p-0',
            {
              'border-dashed': !value,
            },
            className,
          )}
          onClick={() => {
            value ? removeImage() : inputRef.current?.click();
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
          {value ? (
            <>
              <Image
                alt="Product image placeholder"
                className="aspect-square w-full rounded-md object-cover"
                src={value}
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
                <Upload {...iconProps} />
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

export { ImageUploader, type ImageUploaderProps };
