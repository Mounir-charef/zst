'use client';

import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../../components/common/PageTitle';
import { Form } from '@mono/ui';
import UserFormCommonSections from '../../../../../../components/user-form/UserFormCommonSections';
import FormFooter from '../../../../../../components/ui/form/FormFooter';
import { Link } from '../../../../../../navigation';
import { Button } from '../../../../../../components/ui/Button';
import routesConfig from '../../../../../../config/routesConfig';
import { useForm } from 'react-hook-form';
import { FormProps } from '../../../../../../types/form';

const SupplierForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm({
    defaultValues,
  });
  const { control } = form;
  return (
    <>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Supplier Form</PageTitle>
      </BoundedSectionWrapper>
      <Form {...form}>
        <UserFormCommonSections control={control} />
        <FormFooter>
          <Link href={routesConfig.suppliers}>
            <Button variant="outline">Back</Button>
          </Link>
          <Button>Save</Button>
        </FormFooter>
      </Form>
    </>
  );
};

export default SupplierForm;
