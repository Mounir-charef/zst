import React from 'react';

const PaginationText = ({ text }: { text: string }) => {
  return (
    <p className="text-foreground whitespace-nowrap text-sm font-medium">
      {text}
    </p>
  );
};

export default PaginationText;
