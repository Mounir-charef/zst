'use client';

import React from 'react';
import { FormProps } from '../../../../../../types/form';
import { useForm } from 'react-hook-form';
import { Form, FormCardsWrapper } from '@mono/ui';
import CategoryFormInfo from './CategoryFormInfo';

const CategoryForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm({
    defaultValues,
  });
  const { control, handleSubmit } = form;

  const onSubmit = () => {};
  return (
    <Form {...form}>
      <FormCardsWrapper>
        <CategoryFormInfo control={control} />
      </FormCardsWrapper>
    </Form>
  );
};

export default CategoryForm;
