import React from 'react';
import { Card, CardContent } from '../../ui/Card';
import { cn } from '@mono/util';

const ListingHeaderCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card className="mb-8">
      <CardContent className={cn(className)}>{children}</CardContent>
    </Card>
  );
};

export default ListingHeaderCard;
