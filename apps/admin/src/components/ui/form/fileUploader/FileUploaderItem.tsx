import { cn } from '@mono/util';
import Image from 'next/image';
import React from 'react';
import { FileUploaderItemType } from '../../../../types/file-uploader';
import { IoMdClose } from 'react-icons/io';
import { Button } from '@mono/ui';

const imgTypes = [
  'tif',
  'tiff',
  'bmp',
  'jpg',
  'jpeg',
  'svg',
  'ico',
  'webp',
  'gif',
  'png',
  'eps',
  'raw',
];

interface FileUploaderItemProps extends FileUploaderItemType {
  disabled?: boolean;
  handleDelete?: () => unknown;
}

const FileUploaderItem = ({
  disabled,
  url,
  name,
  handleDelete,
}: FileUploaderItemProps) => {
  const splitName = name.split('.');
  const fileType = splitName?.pop();
  const isImage = imgTypes.includes(fileType as string);
  return (
    <div
      className={cn(
        'relative me-2 mt-2 inline-flex flex-col overflow-hidden rounded',
        isImage ? 'border-border-200 border' : '',
        disabled ? 'cursor-not-allowed border-[#D4D8DD] bg-[#EEF1F4]' : '',
      )}
    >
      {isImage ? (
        <figure className="relative flex aspect-square h-16 w-28 items-center justify-center">
          <Image
            src={url}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </figure>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex h-14 w-14 min-w-0 items-center justify-center overflow-hidden">
            <Image
              src={'/images/zip.png'}
              width={56}
              height={56}
              alt="upload placeholder"
            />
          </div>
          <p className="text-body flex cursor-default items-baseline p-1 text-xs">
            <span
              className="inline-block max-w-[64px] overflow-hidden overflow-ellipsis whitespace-nowrap"
              title={`${name}.${fileType}`}
            >
              {name}
            </span>
            .{fileType}
          </p>
        </div>
      )}
      {/* {multiple ? (
          ) : null} */}
      {!disabled ? (
        <Button
          size="icon"
          variant="ghost"
          className="text-light absolute end-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs shadow-xl outline-none"
          onClick={() => handleDelete?.()}
        >
          <IoMdClose size={10} />
        </Button>
      ) : (
        ''
      )}
    </div>
  );
};

export default FileUploaderItem;
