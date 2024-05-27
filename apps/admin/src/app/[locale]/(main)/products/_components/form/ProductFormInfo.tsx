import React from 'react';
import { Control } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  TexteditorField,
} from '@mono/ui';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';

const ProductFormInfo = ({ control }: { control: Control }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
      </CardHeader>
      <CardContent>
        <FormFieldsWrapper>
          <InputField label="Name" name="name" control={control} />
          <TexteditorField
            label="Description"
            name="description"
            control={control}
          />
        </FormFieldsWrapper>
      </CardContent>
    </Card>
  );
};

export default ProductFormInfo;
