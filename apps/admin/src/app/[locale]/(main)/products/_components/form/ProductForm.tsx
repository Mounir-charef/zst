'use client';
import { FormProps } from '../../../../../../types/form';
import { Form } from '@mono/ui';
import { useForm } from 'react-hook-form';
import FormFooter from '../../../../../../components/ui/form/FormFooter';
import { Button } from '../../../../../../components/ui/Button';
import { Link } from '../../../../../../navigation';
import routesConfig from '../../../../../../config/routesConfig';
import ProductFormInfo from './ProductFormInfo';
import ProductFormVariation from './ProductFormVariation';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../../components/common/PageTitle';
import { CREATE_VARIANT } from '../../../../../../constants';
import useFormActions from '../../../../../../hooks/useFormActions';
import ProductFormStatus from './ProductFormStatus';
import ProductFormImages from './ProductFormImages';
import ProductFormCategory from './ProductFormCategory';

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
      <BoundedSectionWrapper noSpacing>
        <PageTitle>{pageTitle}</PageTitle>
      </BoundedSectionWrapper>
      <Form {...form}>
        <ProductFormStatus control={control} />
        <ProductFormInfo control={control} />
        <ProductFormCategory control={control} />
        <ProductFormImages control={control} />
        <ProductFormVariation control={control} watch={watch} />
        <FormFooter>
          <Link href={routesConfig.products}>
            <Button variant="outline">Back</Button>
          </Link>
          <Button onClick={handleSubmit(onSubmit)}>{pageTitle}</Button>
        </FormFooter>
      </Form>
    </>
  );
};

export default ProductForm;
