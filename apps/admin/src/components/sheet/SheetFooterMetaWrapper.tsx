import React from 'react';

const SheetFooterMetaWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex flex-col gap-0.5">{children}</div>;
};

export default SheetFooterMetaWrapper;
