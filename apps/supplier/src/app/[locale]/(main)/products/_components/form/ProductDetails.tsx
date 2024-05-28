import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  InputField,
  TextAreaField,
} from '@mono/ui';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { IProductDetails } from '../../types';

const ProductDetails = () => {
  const { control } = useFormContext<IProductDetails>();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <InputField control={control} name="details.name" label="Name" />
          <TextAreaField
            control={control}
            name="details.description"
            label="Description"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(ProductDetails);
