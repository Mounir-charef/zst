import React from 'react';
import { Control } from 'react-hook-form';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import { InputField, TexteditorField } from '@mono/ui';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';

const ProductFormInfo = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection
        title="Description"
        description="Your product description and necessary information from here"
      >
        <Card>
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
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default ProductFormInfo;
