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

const ProductForm = ({ variant, defaultValues }: FormProps) => {
  const form = useForm({
    defaultValues,
  });

  const { control, watch } = form;

  return (
    <>
      <Form {...form}>
        <ProductFormInfo control={control} />
        <ProductFormVariation control={control} watch={watch} />
        <FormFooter>
          <Link href={routesConfig.products}>
            <Button variant="outline">Back</Button>
          </Link>
          <Button>Create New Product</Button>
        </FormFooter>
      </Form>
    </>
  );
};

export default ProductForm;
