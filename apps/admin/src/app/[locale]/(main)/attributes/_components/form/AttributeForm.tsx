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
import { FormProps } from '../../../../../../types/form';
import { Link } from '../../../../../../navigation';
import routesConfig from '../../../../../../config/routesConfig';

const AttributeForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm({});

  const { control } = form;

  return (
    <Form {...form}>
      <AttributeFormInfo control={control} />
      <AttributeFormValues control={control} />
      <FormFooter>
        <Link href={routesConfig.attributes}>
          <Button variant="outline">Back</Button>
        </Link>
        <Button>Create New Attribute</Button>
      </FormFooter>
    </Form>
  );
};

export default AttributeForm;
