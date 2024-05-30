import React from 'react';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  TextAreaField,
} from '@mono/ui';
import { Control } from 'react-hook-form';
import FileUploaderField from '../../../../../../components/ui/form/fileUploader/FileUploaderField';
import SelectField from '../../../../../../components/ui/form/select/SelectField';

const CategoryFormInfo = ({ control }: { control: Control }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Details</CardTitle>
      </CardHeader>
      <CardContent>
        <FormFieldsWrapper>
          <InputField label="Name" name="name" control={control} />
          <TextAreaField
            label="Description"
            name="description"
            control={control}
          />
          <SelectField
            label="Parent"
            control={control}
            name="parent"
            options={[]}
          />
          <FileUploaderField label="Image" control={control} name="image" />
        </FormFieldsWrapper>
      </CardContent>
    </Card>
  );
};

export default CategoryFormInfo;
