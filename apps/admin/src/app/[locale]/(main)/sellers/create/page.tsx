import React from 'react';
import SellerForm from '../_components/form/SellerForm';
import { CREATE_VARIANT } from '../../../../../constants';

const CreateSellerPage = () => {
  return <SellerForm variant={CREATE_VARIANT} />;
};

export default CreateSellerPage;
