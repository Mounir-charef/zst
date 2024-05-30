import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  PasswordField,
} from '@mono/ui';
import { Control } from 'react-hook-form';

const UserFormPassword = ({ control }: { control: Control }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Password</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <PasswordField control={control} name="password" label="Password" />
        <PasswordField
          control={control}
          name="confirmPassword"
          label="Confirm Password"
        />
      </CardContent>
    </Card>
  );
};

export default UserFormPassword;
