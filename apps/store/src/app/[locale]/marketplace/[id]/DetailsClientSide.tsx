'use client';
import { Card, CardContent } from '@mono/ui';
import { useFindMarketplaceProduct } from 'apps/store/src/dataApi/marketplace';
import { FileText } from 'lucide-react';
import React from 'react';

const DetailsClientSide = ({
  defaultParams,
}: {
  defaultParams: { id: number | string };
}) => {
  const { data } = useFindMarketplaceProduct(defaultParams.id);

  return (
    <div className="flex flex-col">
      <section className="flex flex-col">
        <h2>
          <FileText /> Ad description
        </h2>

        <Card>
          <CardContent>name: {data?.name}</CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DetailsClientSide;
