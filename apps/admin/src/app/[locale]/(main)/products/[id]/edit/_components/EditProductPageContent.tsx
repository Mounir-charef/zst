'use client';

import React from 'react';
import ProductForm from '../../../_components/form/ProductForm';
import { UPDATE_VARIANT } from '../../../../../../../constants';
import { useGetProductDetailsQuery } from '../../../../../../../apis/productApis';
import { useParams } from 'next/navigation';
import { ID } from '../../../../../../../types/common';

const EditProductPageContent = () => {
  const { id } = useParams();
  const { data } = useGetProductDetailsQuery(id as ID);

  if (!data) return null;

  //   const { name } = data;

  const defaultValues = {
    id,
    // name,
  };

  return (
    <ProductForm
      variant={UPDATE_VARIANT}
      pageTitle={'Update Product'}
      defaultValues={defaultValues}
    />
  );
};

export default EditProductPageContent;
