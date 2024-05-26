import React from 'react';
import SupplierForm from '../_components/form/SupplierForm';
import { CREATE_VARIANT } from '../../../../../constants';

const CreateSupplierPage = () => {
  return <SupplierForm variant={CREATE_VARIANT} />;
};

export default CreateSupplierPage;
