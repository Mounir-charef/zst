import React from 'react';
import { Control } from 'react-hook-form';
import FileUploaderField from '../../../../../../components/ui/form/fileUploader/FileUploaderField';
import { Card, CardContent, CardHeader, CardTitle } from '@mono/ui';

const ProductFormImages = ({ control }: { control: Control }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Images</CardTitle>
      </CardHeader>
      <CardContent>
        <FileUploaderField
          control={control}
          name="images"
          label="Images"
          multiple
        />
      </CardContent>
    </Card>
  );
};

export default ProductFormImages;
