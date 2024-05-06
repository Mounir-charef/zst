'use client';

import { Form, TexteditorField } from '@mono/ui';
import { useForm } from 'react-hook-form';
import BoundedSectionWrapper from '../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../components/ui/Card';
import FormFieldsWrapper from '../../../../../components/ui/form/FormFieldsWrapper';
import InputField from '../../../../../components/ui/form/input/InputField';
import SelectField from '../../../../../components/ui/form/select/SelectField';
import CheckboxField from '../../../../../components/ui/form/checbox/CheckboxField';
import RadioField from '../../../../../components/ui/form/radio/RadioField';
import PageTitle from '../../../../../components/common/PageTitle';
import FileUploaderField from '../../../../../components/ui/form/fileUploader/FileUploaderField';
import TextareaField from '../../../../../components/ui/form/textarea/TextareaField';

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
                <FileUploaderField
                  control={form.control}
                  name="gallery"
                  label="Gallery"
                  multiple
                />
                <InputField control={form.control} label="Name" name="name" />
                <TextareaField
                  name="shortDescription"
                  control={form.control}
                  label="Short Description"
                />
                <TexteditorField
                  control={form.control}
                  name="description"
                  label="Description"
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
                <CheckboxField
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
    </Form>
  );
};

export default FormPage;
