'use client';

import React from 'react';
import { FormProps } from '../../../../../../types/form';
import { useForm } from 'react-hook-form';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../../components/common/PageTitle';
import { Form } from '@mono/ui';
import UserFormCommonSections from '../../../../../../components/user-form/UserFormCommonSections';
import FormFooter from '../../../../../../components/ui/form/FormFooter';
import { Link } from '../../../../../../navigation';
import routesConfig from '../../../../../../config/routesConfig';
import { Button } from '../../../../../../components/ui/Button';

const SellerForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm({
    defaultValues,
  });
  const { control } = form;
  return (
    <>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Seller Form</PageTitle>
      </BoundedSectionWrapper>
      <Form {...form}>
        <UserFormCommonSections control={control} />
        <FormFooter>
          <Link href={routesConfig.sellers}>
            <Button variant="outline">Back</Button>
          </Link>
          <Button>Save</Button>
        </FormFooter>
      </Form>
    </>
  );
};

export default SellerForm;
