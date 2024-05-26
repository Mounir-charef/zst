import React from 'react';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import SelectField from '../../../../../../components/ui/form/select/SelectField';
import { Control } from 'react-hook-form';
import statuses from '../../../../../../data/statuses';

const ProductFormStatus = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection title="Status">
        <Card>
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
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default ProductFormStatus;
