import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import { Control } from 'react-hook-form';
import { InputField } from '@mono/ui';

interface AttributeFormInfoProps {
  control: Control;
}

const AttributeFormInfo = ({ control }: AttributeFormInfoProps) => {
  return (
    <BoundedSectionWrapper>
      <FormSection
        title="Attribute"
        description="Your attribute name and necessary information from here"
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

export default AttributeFormInfo;
