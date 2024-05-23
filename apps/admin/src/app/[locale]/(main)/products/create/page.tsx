import React from 'react';
import ProductForm from '../_components/form/ProductForm';
import { CREATE_VARIANT } from '../../../../../constants';

const CreateProductPage = () => {
  return (
    <ProductForm pageTitle="Create New Product" variant={CREATE_VARIANT} />
  );
};

export default CreateProductPage;
