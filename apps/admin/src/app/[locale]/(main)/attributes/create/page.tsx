import React from 'react';
import BoundedSectionWrapper from '../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../components/common/PageTitle';
import AttributeForm from '../_components/form/AttributeForm';
import { CREATE_VARIANT } from '../../../../../constants';

const CreateAttributePage = () => {
  return (
    <>
      <AttributeForm variant={CREATE_VARIANT} />
    </>
  );
};

export default CreateAttributePage;
