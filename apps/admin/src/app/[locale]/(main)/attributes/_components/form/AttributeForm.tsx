'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@mono/ui';
import { Button } from '../../../../../../components/ui/Button';
import AttributeFormValues from './AttributeFormValues';
import AttributeFormInfo from './AttributeFormInfo';
import FormFooter from '../../../../../../components/ui/form/FormFooter';
import { FormProps } from '../../../../../../types/form';
import { Link } from '../../../../../../navigation';
import routesConfig from '../../../../../../config/routesConfig';
import {
  AttributeValues,
  attributeSchema,
} from '../../../../../../schemas/attribute-schema';
import { CREATE_VARIANT, UPDATE_VARIANT } from '../../../../../../constants';
import { zodResolver } from '@hookform/resolvers/zod';

const AttributeForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm<AttributeValues>({
    resolver: zodResolver(attributeSchema),
  });

  const buttonText = {
    [CREATE_VARIANT]: 'Create New Attribute',
    [UPDATE_VARIANT]: 'Update Attribute',
  };

  const { control } = form;

  const onSubmit = (values: AttributeValues) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <AttributeFormInfo control={control} />
      <AttributeFormValues control={control} />
      <FormFooter>
        <Link href={routesConfig.attributes}>
          <Button variant="outline">Back</Button>
        </Link>
        <Button onClick={form.handleSubmit(onSubmit)}>
          {buttonText[variant as keyof typeof buttonText]}
        </Button>
      </FormFooter>
    </Form>
  );
};

export default AttributeForm;
