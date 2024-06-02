import React from 'react';
import { Control } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle, InputField } from '@mono/ui';
import { AttributeValues } from '../../../../../../schemas/attribute-schema';

interface AttributeFormInfoProps {
  control: Control<AttributeValues>;
}

const AttributeFormInfo = ({ control }: AttributeFormInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attribute Details</CardTitle>
      </CardHeader>
      <CardContent>
        <InputField label="Name" name="name" control={control} />
      </CardContent>
    </Card>
  );
};

export default AttributeFormInfo;
