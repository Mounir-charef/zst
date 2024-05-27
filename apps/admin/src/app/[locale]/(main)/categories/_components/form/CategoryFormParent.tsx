import React from 'react';
import { Control } from 'react-hook-form';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import SelectField from '../../../../../../components/ui/form/select/SelectField';

const CategoryFormParent = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection title="Parent" description="Your parent's category">
        <Card>
          <CardContent>
            <FormFieldsWrapper>
              <SelectField
                label="Parent"
                control={control}
                name="parent"
                options={[]}
              />
            </FormFieldsWrapper>
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default CategoryFormParent;
