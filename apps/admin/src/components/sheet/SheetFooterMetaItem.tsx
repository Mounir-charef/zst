import React from 'react';

interface SheetFooterMetaItemProps {
  title: React.ReactNode;
  value: React.ReactNode;
}

const SheetFooterMetaItem = ({ title, value }: SheetFooterMetaItemProps) => {
  return (
    <div className="flex justify-between text-sm">
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default SheetFooterMetaItem;
