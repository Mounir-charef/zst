'use client';
import React from 'react';
import { FormProps } from '../../../../../../types/form';
import { useForm } from 'react-hook-form';
import { Form } from '@mono/ui';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../../components/common/PageTitle';
import FormFooter from '../../../../../../components/ui/form/FormFooter';
import routesConfig from '../../../../../../config/routesConfig';
import { Link } from '../../../../../../navigation';
import { Button } from '../../../../../../components/ui/Button';
import UserFormCommonSections from '../../../../../../components/user-form/UserFormCommonSections';

const AdminForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm({
    defaultValues,
  });

  const { control } = form;

  return (
    <>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Admin Form</PageTitle>
      </BoundedSectionWrapper>
      <Form {...form}>
        <UserFormCommonSections control={control} />
        <FormFooter>
          <Link href={routesConfig.admins}>
            <Button variant="outline">Back</Button>
          </Link>
          <Button>Save</Button>
        </FormFooter>
      </Form>
    </>
  );
};

export default AdminForm;
