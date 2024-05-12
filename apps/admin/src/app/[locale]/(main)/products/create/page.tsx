import React from 'react';
import BoundedSectionWrapper from '../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../components/common/PageTitle';
import ProductForm from '../_components/form/ProductForm';
import { CREATE_VARIANT } from '../../../../../constants';

const CreateProductPage = () => {
  return (
    <>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Create New Product</PageTitle>
      </BoundedSectionWrapper>
      <ProductForm variant={CREATE_VARIANT} />
    </>
  );
};

export default CreateProductPage;
