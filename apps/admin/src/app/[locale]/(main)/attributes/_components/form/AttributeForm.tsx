'use client';

import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import InputField from '../../../../../../components/ui/form/input/InputField';
import { useForm } from 'react-hook-form';
import { Form } from '@mono/ui';
import { Button } from '../../../../../../components/ui/Button';
import AttributeFormValues from './AttributeFormValues';
import AttributeFormInfo from './AttributeFormInfo';
import FormFooter from '../../../../../../components/ui/form/FormFooter';

const AttributeForm = () => {
  const form = useForm({});

  const { control } = form;

  return (
    <Form {...form}>
      <AttributeFormInfo control={control} />
      <AttributeFormValues control={control} />
      <FormFooter>
        <Button variant="outline">Back</Button>
        <Button>Create New Attribute</Button>
      </FormFooter>
    </Form>
  );
};

export default AttributeForm;
