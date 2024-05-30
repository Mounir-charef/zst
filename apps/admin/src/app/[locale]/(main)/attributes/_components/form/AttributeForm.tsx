'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormCardsWrapper } from '@mono/ui';
import AttributeFormValues from './AttributeFormValues';
import AttributeFormInfo from './AttributeFormInfo';
import { FormProps } from '../../../../../../types/form';
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
      <FormCardsWrapper>
        <AttributeFormInfo control={control} />
        <AttributeFormValues control={control} />
      </FormCardsWrapper>
    </Form>
  );
};

export default AttributeForm;
