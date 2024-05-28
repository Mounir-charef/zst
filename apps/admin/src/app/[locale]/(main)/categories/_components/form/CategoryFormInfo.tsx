import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import { InputField, TextAreaField } from '@mono/ui';
import { Control } from 'react-hook-form';
import FileUploaderField from '../../../../../../components/ui/form/fileUploader/FileUploaderField';

const CategoryFormInfo = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection
        title="Description"
        description="Your category description and necessary information from here"
      >
        <Card>
          <CardContent>
            <FormFieldsWrapper>
              <InputField label="Name" name="name" control={control} />
              <TextAreaField
                label="Description"
                name="description"
                control={control}
              />
              <FileUploaderField label="Image" control={control} name="image" />
            </FormFieldsWrapper>
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default CategoryFormInfo;
