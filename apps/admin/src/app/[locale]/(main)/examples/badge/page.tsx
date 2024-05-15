import React from 'react';
import Badge from '../../../../../components/ui/Badge';

// Admins
// Seller / Vendor
// Supplier / Wholeseller
// Client (not important)

const BadgePage = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge>Primary</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="simple">Simple</Badge>
    </div>
  );
};

export default BadgePage;
