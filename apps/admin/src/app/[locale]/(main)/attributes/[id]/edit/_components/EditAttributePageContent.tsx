import React from 'react';
import BoundedSectionWrapper from '../../../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../../../components/common/PageTitle';
import AttributeForm from '../../../_components/form/AttributeForm';
import { UPDATE_VARIANT } from '../../../../../../../constants';

const EditAttributePageContent = () => {
  return (
    <>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Create New Attribute</PageTitle>
      </BoundedSectionWrapper>
      <AttributeForm variant={UPDATE_VARIANT} />
    </>
  );
};

export default EditAttributePageContent;
