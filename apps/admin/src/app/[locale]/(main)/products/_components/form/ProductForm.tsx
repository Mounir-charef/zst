'use client';
import { FormProps } from '../../../../../../types/form';
import { Form, FormGridWrapper } from '@mono/ui';
import { useForm } from 'react-hook-form';
import ProductFormInfo from './ProductFormInfo';
import ProductFormVariation from './ProductFormVariation';
import ProductFormStatus from './ProductFormStatus';
import ProductFormImages from './ProductFormImages';
import ProductFormCategory from './ProductFormCategory';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../../components/common/PageTitle';
import FormHeader from '../../../../../../components/ui/form/FormHeader';
import routesConfig from '../../../../../../config/routesConfig';

const ProductForm = ({
  variant,
  defaultValues,
  pageTitle,
}: FormProps & { pageTitle: string }) => {
  const form = useForm({
    defaultValues,
  });

  const { control, watch, handleSubmit } = form;

  // const mutation = useFormActions({
  //   variant,
  //   createArgs: {},
  //   updateArgs: {},
  // })

  const onSubmit = (values: unknown) => {
    const body = {
      // ...values,
    };

    // mutation.mutate(body)
  };

  return (
    <>
      <FormHeader backHref={routesConfig.products} title="Add Product" />
      <Form {...form}>
        <FormGridWrapper
          leftSide={
            <>
              <ProductFormInfo control={control} />
              <ProductFormVariation control={control} watch={watch} />
            </>
          }
          rightSide={
            <>
              <ProductFormStatus control={control} />
              <ProductFormCategory control={control} />
              <ProductFormImages control={control} />
            </>
          }
        />
      </Form>
    </>
  );
};

export default ProductForm;
