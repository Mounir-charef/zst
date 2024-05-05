import { useState } from 'react';
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

interface FileUploaderProps extends DropzoneOptions {
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
  const [files, setFiles] = useState<FileUploaderItemType[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.svg'],
    },
    onDrop(acceptedFiles) {
      console.log({ acceptedFiles });
      //   const files = acceptedFiles.map((file) => transformFileToObject(file));
      //   setFiles(files);
    },
    ...props,
  });

  const handleDelete = (image: string) => {
    //
  };
  const thumbs = files?.map((file: any, idx) => {
    return <FileUploaderItem key={idx} {...file} />;
  });

  return (
    <section className="upload">
      <div
        {...getRootProps({
          className: cn(
            'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none relative',
            disabled
              ? 'pointer-events-none select-none opacity-80 bg-[#EEF1F4]'
              : 'cursor-pointer'
          ),
        })}
      >
        {!disabled ? <input {...getInputProps()} /> : ''}
        <FaCloudUploadAlt className="text-muted" size={40} />
        <p className="mt-4 text-sm text-center text-body">
          {helperText ? (
            <span className="font-semibold text-gray-500">{helperText}</span>
          ) : (
            <>
              <span className="font-semibold text-primary">
                Upload an image
              </span>{' '}
              or drag and drop <br />
            </>
          )}
        </p>
      </div>

      {!!thumbs.length && <div className="flex flex-wrap mt-2">{thumbs}</div>}
    </section>
  );
}
export default FileUploader;
