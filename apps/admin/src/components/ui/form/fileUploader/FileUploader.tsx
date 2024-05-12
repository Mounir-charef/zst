import { useEffect, useState } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { cn } from '@mono/util';
import { FaCloudUploadAlt } from 'react-icons/fa';
import FileUploaderItem from './FileUploaderItem';
import { FileUploaderItemType } from '../../../../types/file-uploader';
import { transformFileToObject } from '../../../../utils/file-uploaderUtils';

// const getPreviewImage = (value: any) => {
//   let images: any[] = [];
//   if (value) {
//     images = Array.isArray(value) ? value : [{ ...value }];
//   }
//   return images;
// };

export interface FileUploaderProps extends DropzoneOptions {
  value?: FileUploaderItemType | FileUploaderItemType[];
  onChange?: () => unknown;
  helperText?: string;
}

function FileUploader({
  onChange,
  value,
  multiple,
  helperText,
  disabled,
  ...props
}: FileUploaderProps) {
  const [files, setFiles] = useState<
    FileUploaderItemType[] | FileUploaderItemType | null
  >(multiple ? [] : null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.svg'],
    },
    onDrop(acceptedFiles) {
      if (!acceptedFiles) return;
      if (multiple) {
        const files = acceptedFiles.map((file) => transformFileToObject(file));
        setFiles((prevFiles) => [
          ...(prevFiles as FileUploaderItemType[]),
          ...files,
        ]);
      } else {
        const file = acceptedFiles[0];
        setFiles(transformFileToObject(file));
      }
    },
    multiple,
    ...props,
  });

  const handleDelete = (idx: number) => {
    if (multiple) {
      setFiles((files) => {
        if (files && Array.isArray(files)) {
          return files.filter((_, index) => index !== idx);
        }
        return files;
      });
    } else {
      setFiles(null);
    }
  };

  const thumbs = (files ? (Array.isArray(files) ? files : [files]) : [])?.map(
    (file: any, idx) => {
      return (
        <FileUploaderItem
          key={idx}
          handleDelete={() => handleDelete(idx)}
          {...file}
        />
      );
    },
  );

  useEffect(() => {}, [files]);

  return (
    <section className="upload">
      <div
        {...getRootProps({
          className: cn(
            'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none relative',
            disabled
              ? 'pointer-events-none select-none opacity-80 bg-[#EEF1F4]'
              : 'cursor-pointer',
          ),
        })}
      >
        {!disabled ? <input {...getInputProps()} /> : ''}
        <FaCloudUploadAlt className="text-muted-foreground" size={40} />
        <p className="text-body mt-4 text-center text-sm">
          {helperText ? (
            <span className="font-semibold text-gray-500">{helperText}</span>
          ) : (
            <>
              <span className="text-primary font-semibold">
                Upload an image
              </span>{' '}
              or drag and drop <br />
            </>
          )}
        </p>
      </div>

      {!!thumbs.length && <div className="mt-2 flex flex-wrap">{thumbs}</div>}
    </section>
  );
}
export default FileUploader;
