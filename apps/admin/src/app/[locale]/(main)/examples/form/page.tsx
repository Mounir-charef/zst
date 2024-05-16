'use client';

import {
  CheckBoxField,
  Form,
  InputField,
  PhoneInputField,
  SwitchField,
  TextAreaField,
  TexteditorField,
} from '@mono/ui';
import { useForm } from 'react-hook-form';
import BoundedSectionWrapper from '../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../components/ui/Card';
import FormFieldsWrapper from '../../../../../components/ui/form/FormFieldsWrapper';
import RadioField from '../../../../../components/ui/form/radio/RadioField';
import PageTitle from '../../../../../components/common/PageTitle';
import FileUploaderField from '../../../../../components/ui/form/fileUploader/FileUploaderField';
import FormFooter from '../../../../../components/ui/form/FormFooter';
import { Button } from '../../../../../components/ui/Button';
import SelectField from '../../../../../components/ui/form/select/SelectField';

const FormPage = () => {
  const form = useForm({});
  return (
    <Form {...form}>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Form</PageTitle>
      </BoundedSectionWrapper>
      <BoundedSectionWrapper>
        <FormSection title="Section" description="Section Description">
          <Card>
            <CardContent>
              <FormFieldsWrapper>
                <InputField control={form.control} label="Name" name="name" />

                <InputField
                  className="!col-span-6"
                  control={form.control}
                  label="Col 1"
                  name="col1"
                />
                <PhoneInputField
                  className="!col-span-6"
                  control={form.control}
                  label="Phone Input"
                  name="phone"
                />

                <InputField
                  className="!col-span-6"
                  control={form.control}
                  label="Col 1"
                  name="col1"
                />
                <SelectField
                  formItemClassName="!col-span-6"
                  control={form.control}
                  label="Options"
                  name="options1"
                  options={Array.from({ length: 10 }).map((_, index) => ({
                    label: `Label ${index + 1}`,
                    value: index,
                  }))}
                />

                <FileUploaderField
                  control={form.control}
                  name="gallery"
                  label="Gallery"
                  multiple
                />
                <TextAreaField
                  name="shortDescription"
                  control={form.control}
                  label="Short Description"
                  TextAreaProps={{
                    rows: 3,
                  }}
                />
                <TexteditorField
                  control={form.control}
                  name="description"
                  label="Description"
                />
                <SelectField
                  control={form.control}
                  label="Multi Select"
                  name="multiOptions"
                  options={Array.from({ length: 10 }).map((_, index) => ({
                    label: `Label ${index + 1}`,
                    value: index,
                  }))}
                  isMulti
                />
                <SelectField
                  control={form.control}
                  label="Options"
                  name="options"
                  options={Array.from({ length: 10 }).map((_, index) => ({
                    label: `Label ${index + 1}`,
                    value: index,
                  }))}
                />

                <SwitchField
                  control={form.control}
                  label={'Enable'}
                  name="enabled"
                />

                <SwitchField
                  control={form.control}
                  label={'Enable Label End'}
                  name="enabledEnd"
                  labelDirection="end"
                />

                <CheckBoxField
                  control={form.control}
                  name="isAvailable"
                  label="Is Available"
                />
                <RadioField
                  control={form.control}
                  name="type"
                  options={Array.from({ length: 3 }).map((_, index) => ({
                    label: `Option ${index + 1}`,
                    value: index,
                  }))}
                />
              </FormFieldsWrapper>
            </CardContent>
          </Card>
        </FormSection>
      </BoundedSectionWrapper>
      <BoundedSectionWrapper noBorder>
        <FormSection
          title="Last Section No Border"
          description="Last Section Description"
        >
          <Card>
            <CardContent></CardContent>
          </Card>
        </FormSection>
      </BoundedSectionWrapper>
      <FormFooter>
        <Button variant="outline">Back</Button>
        <Button>Save</Button>
      </FormFooter>
    </Form>
  );
};

export default FormPage;
