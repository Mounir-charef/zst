'use client';

import React from 'react';
import { FormProps } from '../../../../../../types/form';
import { useForm } from 'react-hook-form';
import { Form } from '@mono/ui';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../../components/common/PageTitle';
import FormFooter from '../../../../../../components/ui/form/FormFooter';
import { Link } from '../../../../../../navigation';
import routesConfig from '../../../../../../config/routesConfig';
import { Button } from '../../../../../../components/ui/Button';
import ButtonExamplePage from '../../../examples/button/page';
import CategoryFormInfo from './CategoryFormInfo';
import CategoryFormParent from './CategoryFormParent';

const CategoryForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm({
    defaultValues,
  });
  const { control, handleSubmit } = form;

  const onSubmit = () => {};
  return (
    <>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Category Form</PageTitle>
      </BoundedSectionWrapper>
      <Form {...form}>
        <CategoryFormInfo control={control} />
        <CategoryFormParent control={control} />
        <FormFooter>
          <Link href={routesConfig.categories}>
            <Button variant="outline">Back</Button>
          </Link>
          <Button onClick={handleSubmit(onSubmit)}>Save</Button>
        </FormFooter>
      </Form>
    </>
  );
};

export default CategoryForm;
