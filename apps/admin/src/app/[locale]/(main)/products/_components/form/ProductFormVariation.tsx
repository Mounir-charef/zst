import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Control, FieldValues, UseFormWatch } from 'react-hook-form';
import ProductFormVariationOptions from './ProductFormVariationOptions';
import ProductFormVariationGenerated from './ProductFormVariationGenerated';
import { Card, CardHeader, CardTitle } from '@mono/ui';

const ProductFormVariation = ({
  control,
  watch,
}: {
  control: Control;
  watch: UseFormWatch<FieldValues>;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Variations</CardTitle>
      </CardHeader>
      <ProductFormVariationOptions control={control} watch={watch} />
      <ProductFormVariationGenerated control={control} watch={watch} />
    </Card>
  );
};

export default ProductFormVariation;
