import React from 'react';

interface FormGridWrapperProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
}

export const FormCardsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col gap-8">{children}</div>;
};

export const FormGridWrapper = ({
  leftSide,
  rightSide,
}: FormGridWrapperProps) => {
  return (
    <div className="grid grid-cols-[8fr_4fr] gap-6">
      <FormCardsWrapper>{leftSide}</FormCardsWrapper>
      <FormCardsWrapper>{rightSide}</FormCardsWrapper>
    </div>
  );
};
