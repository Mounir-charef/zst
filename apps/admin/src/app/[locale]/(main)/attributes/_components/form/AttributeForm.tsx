'use client';

import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import InputField from '../../../../../../components/ui/form/input/InputField';
import { useForm } from 'react-hook-form';
import { Form, Texteditor, TexteditorField } from '@mono/ui';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import SelectField from '../../../../../../components/ui/form/select/SelectField';
import { Checkbox } from '../../../../../../components/ui/form/checbox/Checkbox';
import CheckboxField from '../../../../../../components/ui/form/checbox/CheckboxField';
import RadioField from '../../../../../../components/ui/form/radio/RadioField';
import FileUploader from '../../../../../../components/ui/form/fileUploader/FileUploader';

const AttributeForm = () => {
  const form = useForm({});

  return (
    <Form {...form}>
      <BoundedSectionWrapper>
        <FormSection
          title="Attribute"
          description="Update your attribute name and necessary information from here"
        >
          <Card>
            <CardContent>
              <FormFieldsWrapper>
                <FileUploader />
                <InputField control={form.control} label="Name" name="name" />
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
          title="Attribute Values"
          description="Update your attribute value and necessary information from here"
        >
          <Card>
            <CardContent></CardContent>
          </Card>
        </FormSection>
      </BoundedSectionWrapper>
    </Form>
  );
};

export default AttributeForm;
