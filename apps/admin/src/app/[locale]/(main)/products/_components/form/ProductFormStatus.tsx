import React from 'react';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import SelectField from '../../../../../../components/ui/form/select/SelectField';
import { Control } from 'react-hook-form';
import statuses from '../../../../../../data/statuses';
import { Card, CardContent, CardHeader, CardTitle } from '@mono/ui';

const ProductFormStatus = ({ control }: { control: Control }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent>
        <FormFieldsWrapper>
          <SelectField
            name="status"
            label="Status"
            options={statuses}
            control={control}
          />
        </FormFieldsWrapper>
      </CardContent>
    </Card>
  );
};

export default ProductFormStatus;
