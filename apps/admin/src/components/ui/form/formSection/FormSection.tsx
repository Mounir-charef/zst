import React from 'react';
import FormSectionTitle from './FormSectionTitle';
import FormSectionDescription from './FormSectionDescription';

interface FormSectionProps {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}

const FormSection = ({ title, description, children }: FormSectionProps) => {
  return (
    <div className="flex gap-5">
      <div className="w-4/12">
        <FormSectionTitle className="mb-2">{title}</FormSectionTitle>
        {description && <FormSectionDescription description={description} />}
      </div>
      <div className="w-8/12">{children}</div>
    </div>
  );
};

export default FormSection;
