import React from 'react';
import BoundedSectionWrapper from '../common/BoundedSectionWrapper';
import FormSection from '../ui/form/formSection/FormSection';
import { Card, CardContent } from '../ui/Card';
import { PasswordField } from '@mono/ui';
import { Control } from 'react-hook-form';

const UserFormPassword = ({ control }: { control: Control }) => {
  return (
    <BoundedSectionWrapper>
      <FormSection title="Password" description="Set your password from here">
        <Card>
          <CardContent className="space-y-4">
            <PasswordField control={control} name="password" label="Password" />
            <PasswordField
              control={control}
              name="confirmPassword"
              label="Confirm Password"
            />
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default UserFormPassword;
