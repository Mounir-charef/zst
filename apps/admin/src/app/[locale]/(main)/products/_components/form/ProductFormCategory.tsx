import React from 'react';
import { Control } from 'react-hook-form';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import SelectField from '../../../../../../components/ui/form/select/SelectField';

const ProductFormCategory = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection
        title="Category"
        // description="Your product description and necessary information from here"
      >
        <Card>
          <CardContent>
            <FormFieldsWrapper>
              <SelectField
                label="Category"
                control={control}
                name="category"
                options={[]}
              />
              {/* <SelectField options={[]} /> */}
            </FormFieldsWrapper>
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default ProductFormCategory;
