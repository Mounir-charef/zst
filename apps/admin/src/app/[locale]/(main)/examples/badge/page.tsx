import React from 'react';
import Badge from '../../../../../components/ui/Badge';

const BadgePage = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Badge>Primary</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="simple">Simple</Badge>
    </div>
  );
};

export default BadgePage;
