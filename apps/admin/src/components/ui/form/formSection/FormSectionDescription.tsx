import React from 'react';

interface FormSectionDescriptionProps {
  description: React.ReactNode;
}

const FormSectionDescription = ({
  description,
}: FormSectionDescriptionProps) => {
  return <p className="text-sm text-body">{description}</p>;
};

export default FormSectionDescription;
