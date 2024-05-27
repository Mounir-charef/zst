import React from 'react';
import CategoryForm from '../_components/form/CategoryForm';
import { CREATE_VARIANT } from '../../../../../constants';

const CreateCategoryPage = () => {
  return <CategoryForm variant={CREATE_VARIANT} />;
};

export default CreateCategoryPage;
