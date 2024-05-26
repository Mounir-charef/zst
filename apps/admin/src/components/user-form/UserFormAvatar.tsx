import React from 'react';
import BoundedSectionWrapper from '../common/BoundedSectionWrapper';
import FormSection from '../ui/form/formSection/FormSection';
import { Card, CardContent } from '../ui/Card';
import FileUploaderField from '../ui/form/fileUploader/FileUploaderField';
import { Control } from 'react-hook-form';

const UserFormAvatar = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection
        title="Avatar"
        description="Upload your profile image from here. Dimension of the avatar should be 140 x 140px"
      >
        <Card>
          <CardContent>
            <FileUploaderField control={control} name="avatar" multiple />
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default UserFormAvatar;
