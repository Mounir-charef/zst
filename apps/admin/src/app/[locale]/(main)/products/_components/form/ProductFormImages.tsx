import React from 'react';
import { Control } from 'react-hook-form';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import FileUploaderField from '../../../../../../components/ui/form/fileUploader/FileUploaderField';

const ProductFormImages = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection
        title="Images"
        // description="Update your product variation and necessary information from here"
      >
        <Card>
          <CardContent>
            <FileUploaderField
              control={control}
              name="images"
              label="Images"
              multiple
            />
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default ProductFormImages;
