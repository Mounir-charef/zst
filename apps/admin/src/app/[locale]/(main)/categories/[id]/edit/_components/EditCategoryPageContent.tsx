'use client';

import React from 'react';
import CategoryForm from '../../../_components/form/CategoryForm';
import { UPDATE_VARIANT } from '../../../../../../../constants';
import { useGetCategoryDetailsQuery } from '../../../../../../../apis/categoryApis';
import { useParams } from 'next/navigation';
import { TypedCategoryListing } from '../../../../../../../types/category';

const EditCategoryPageContent = () => {
  const { id } = useParams();
  const { data } = useGetCategoryDetailsQuery(id as string);

  if (!data) return null;

  const { name, description } = data as TypedCategoryListing;

  const defaultValues = {
    id,
    name,
    description,
  };

  return (
    <>
      <CategoryForm variant={UPDATE_VARIANT} defaultValues={defaultValues} />
    </>
  );
};

export default EditCategoryPageContent;
