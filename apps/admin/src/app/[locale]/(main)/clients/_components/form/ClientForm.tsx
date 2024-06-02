'use client';

import React from 'react';
import { Form } from '@mono/ui';
import UserFormCommonSections from '../../../../../../components/user-form/UserFormCommonSections';
import { useForm } from 'react-hook-form';
import { FormProps } from '../../../../../../types/form';

const ClientForm = ({ defaultValues }: FormProps) => {
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

export default ClientForm;
