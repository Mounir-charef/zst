import React from 'react';
import { Control } from 'react-hook-form';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import InputField from '../../../../../../components/ui/form/input/InputField';

const ProductFormInfo = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection
        title="Description"
        description="Your product description and necessary information from here"
      >
        <Card>
          <CardContent>
            <InputField label="Name" name="name" control={control} />
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default ProductFormInfo;
