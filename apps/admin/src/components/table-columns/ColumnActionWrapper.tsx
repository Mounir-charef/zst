import React from 'react';

const ColumnActionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

export default ColumnActionWrapper;
