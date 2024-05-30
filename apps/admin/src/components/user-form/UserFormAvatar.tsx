import React from 'react';
import FileUploaderField from '../ui/form/fileUploader/FileUploaderField';
import { Control } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@mono/ui';

const UserFormAvatar = ({ control }: { control: Control }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Avatar</CardTitle>
      </CardHeader>
      <CardContent>
        <FileUploaderField control={control} name="avatar" />
      </CardContent>
    </Card>
  );
};

export default UserFormAvatar;
