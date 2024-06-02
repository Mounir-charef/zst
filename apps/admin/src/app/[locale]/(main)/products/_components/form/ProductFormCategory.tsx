import React from 'react';
import { Control } from 'react-hook-form';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import SelectField from '../../../../../../components/ui/form/select/SelectField';
import { Card, CardContent, CardHeader, CardTitle } from '@mono/ui';

const ProductFormCategory = ({ control }: { control: Control }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Category</CardTitle>
      </CardHeader>
      <CardContent>
        <FormFieldsWrapper>
          <SelectField
            label="Category"
            control={control}
            name="category"
            options={[]}
          />
          <SelectField
            name="subCategory"
            control={control}
            label="Subcategory (optional)"
            options={[]}
          />
        </FormFieldsWrapper>
      </CardContent>
    </Card>
  );
};

export default ProductFormCategory;
