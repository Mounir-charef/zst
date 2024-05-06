import React from 'react';
import { FormFieldProps } from '../form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@mono/ui';
import FileUploader, { FileUploaderProps } from './FileUploader';

type FileUploaderFieldProps = FormFieldProps<FileUploaderProps>;

const FileUploaderField = ({
  control,
  label,
  name,
  description,
  ...props
}: FileUploaderFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <FileUploader {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FileUploaderField;
