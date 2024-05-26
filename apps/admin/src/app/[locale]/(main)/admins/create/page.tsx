import React from 'react';
import AdminForm from '../_components/form/AdminForm';
import { CREATE_VARIANT } from '../../../../../constants';

const CreateAdminPage = () => {
  return <AdminForm variant={CREATE_VARIANT} />;
};

export default CreateAdminPage;
