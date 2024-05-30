import { Badge } from '@mono/ui';
import React from 'react';

// Admins
// Seller / Vendor / Store
// Supplier / Wholeseller
// Client (not important)

const BadgePage = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  );
};

export default BadgePage;
