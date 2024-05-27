import React from 'react';
import FormFieldsWrapper from '../ui/form/FormFieldsWrapper';
import { Control } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  PhoneInputField,
} from '@mono/ui';

const UserFormPersonalInfo = ({ control }: { control: Control }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
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
  );
};

export default UserFormPersonalInfo;
