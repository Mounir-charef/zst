import { Button, Input, Texteditor } from '@mono/ui';
import React from 'react';
import FormSection from '../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../components/ui/Card';
import BoundedSectionWrapper from '../../../../../components/common/BoundedSectionWrapper';
import PageTitle from '../../../../../components/common/PageTitle';
import AttributeForm from '../_components/form/AttributeForm';

const CreateAttributePage = () => {
  return (
    <>
      <BoundedSectionWrapper noSpacing>
        <PageTitle>Create New Attribute</PageTitle>
      </BoundedSectionWrapper>
      <AttributeForm />
    </>
  );
};

export default CreateAttributePage;
