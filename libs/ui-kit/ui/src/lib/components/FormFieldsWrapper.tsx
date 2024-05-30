import React from 'react';

interface FormFieldsWrapperProps {
  children: React.ReactNode;
}

export const FormFieldsWrapper = ({ children }: FormFieldsWrapperProps) => {
  return (
    <div className="grid grid-cols-12 gap-4 [&>*]:col-span-full">
      {children}
    </div>
  );
};
