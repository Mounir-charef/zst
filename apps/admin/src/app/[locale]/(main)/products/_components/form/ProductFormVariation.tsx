import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card } from '../../../../../../components/ui/Card';
import { Control, FieldValues, UseFormWatch } from 'react-hook-form';
import ProductFormVariationOptions from './ProductFormVariationOptions';
import ProductFormVariationGenerated from './ProductFormVariationGenerated';

const ProductFormVariation = ({
  control,
  watch,
}: {
  control: Control;
  watch: UseFormWatch<FieldValues>;
}) => {
  return (
    <BoundedSectionWrapper noBorder>
      <FormSection
        title="Product Variation Information"
        description="Update your product variation and necessary information from here"
      >
        <Card>
          <ProductFormVariationOptions control={control} watch={watch} />
          <ProductFormVariationGenerated control={control} watch={watch} />
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default ProductFormVariation;
