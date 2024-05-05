import { cn } from '@mono/util';
import Image from 'next/image';
import React from 'react';
import { FileUploaderItemType } from '../../../../types/file-uploader';
import { IoMdClose } from 'react-icons/io';

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
}

const FileUploaderItem = ({
  file,
  disabled,
  url,
  name,
}: FileUploaderItemProps) => {
  const splitName = name.split('.');
  const fileType = splitName?.pop();
  const isImage = imgTypes.includes(fileType as string);
  return (
    <div
      className={cn(
        'relative mt-2 inline-flex flex-col overflow-hidden rounded me-2',
        isImage ? 'border border-border-200' : '',
        disabled ? 'cursor-not-allowed border-[#D4D8DD] bg-[#EEF1F4]' : ''
      )}
    >
      {isImage ? (
        <figure className="relative flex items-center justify-center h-16 w-28 aspect-square">
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
          <div className="flex items-center justify-center min-w-0 overflow-hidden h-14 w-14">
            <Image
              src={'/images/zip.png'}
              width={56}
              height={56}
              alt="upload placeholder"
            />
          </div>
          <p className="flex items-baseline p-1 text-xs cursor-default text-body">
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
        <button
          className="absolute flex items-center justify-center w-4 h-4 text-xs bg-red-600 rounded-full shadow-xl outline-none top-1 text-light end-1"
          //   onClick={() => handleDelete(file.thumbnail)}
        >
          <IoMdClose size={10} />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default FileUploaderItem;
