import React from 'react';
import ClientForm from '../_components/form/ClientForm';
import { CREATE_VARIANT } from '../../../../../constants';

const CreateClientPage = () => {
  return <ClientForm variant={CREATE_VARIANT} />;
};

export default CreateClientPage;
