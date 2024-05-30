'use client';

import React from 'react';
import { FormProps } from '../../../../../../types/form';
import { useForm } from 'react-hook-form';
import { Form } from '@mono/ui';
import UserFormCommonSections from '../../../../../../components/user-form/UserFormCommonSections';

const SellerForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm({
    defaultValues,
  });
  const { control } = form;
  return (
    <>
      <Form {...form}>
        <UserFormCommonSections control={control} />
      </Form>
    </>
  );
};

export default SellerForm;
