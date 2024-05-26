import React from 'react';
import BoundedSectionWrapper from '../common/BoundedSectionWrapper';
import { Card, CardContent } from '../ui/Card';
import FormSection from '../ui/form/formSection/FormSection';
import FormFieldsWrapper from '../ui/form/FormFieldsWrapper';
import { Control } from 'react-hook-form';
import { InputField, PhoneInputField } from '@mono/ui';

const UserFormPersonalInfo = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection
        title="Personal Information"
        description="Add your profile information from here"
      >
        <Card>
          <CardContent>
            <FormFieldsWrapper>
              <InputField label="Usermame" name="username" control={control} />
              <InputField
                className="!col-span-6"
                label="Email"
                name="email"
                control={control}
              />
              <PhoneInputField
                className="!col-span-6"
                label="Phone"
                name="phoneNumber"
                control={control}
              />
            </FormFieldsWrapper>
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default UserFormPersonalInfo;
