'use client';
import { Badge, Card, CardContent, CardHeader, Gallery } from '@mono/ui';
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
    <div className="flex flex-col gap-4 py-4">
      <section className="flex flex-col gap-4">
        <h1 className="flex items-center gap-2 text-2xl">{data?.name}</h1>

        <Gallery
          images={
            data?.attachments?.map((item) => ({
              src: item,
              alt: 'zedtrip',
            })) ?? []
          }
          socials={{
            facebookLink: 'https://www.facebook.com',
            twitterLink: 'https://www.twitter.com',
          }}
          headerProps={{
            showRating: true,
            rating: 4.5,
            name: 'Hotel Stanford',
            location: 'New York',
            totalReviews: 100,
          }}
        />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-lg">
          <FileText className="text-primary" /> Ad description
        </h2>

        <Card>
          <CardContent className="py-0">
            {data?.details?.map((attribute) => (
              <div
                key={attribute.key}
                className="grid grid-cols-4 border-b border-gray-100 py-2"
              >
                <p className="col-span-1"> {attribute.label}</p>

                {attribute.type === 'TEXT' ? (
                  <div className="col-span-3">{attribute.value}</div>
                ) : attribute.type === 'BADGES' ? (
                  <div className="col-span-3 flex gap-2 flex-wrap">
                    {attribute.values.map((value) => (
                      <Badge>{value}</Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-primary">Description</CardHeader>
          <CardContent
            className="py-0"
            dangerouslySetInnerHTML={{ __html: data?.textDescription ?? '' }}
          />
        </Card>
      </section>
    </div>
  );
};

export default DetailsClientSide;
