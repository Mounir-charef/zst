'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
  CardContent,
  CardHeader,
  Gallery,
} from '@mono/ui';
import { getRelativeTime } from '@mono/util';
import {
  TBid,
  useFindMarketplaceProduct,
  useFindMarketplaceProductBids,
} from 'apps/store/src/dataApi/marketplace';
import { FileText } from 'lucide-react';
import React from 'react';

const DetailsClientSide = ({
  defaultParams,
}: {
  defaultParams: { id: number | string };
}) => {
  const { data } = useFindMarketplaceProduct(defaultParams.id);
  const { data: bids } = useFindMarketplaceProductBids({
    id: defaultParams.id,
  });

  console.log(
    '%capps/store/src/app/[locale]/marketplace/[id]/DetailsClientSide.tsx:31 bids',
    'color: white; background-color: #007acc;',
    bids
  );
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
                      <Badge key={value}>{value}</Badge>
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

      <section className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-lg">
          <FileText className="text-primary" /> Bids
        </h2>

        <div className="flex flex-col gap-4">
          {bids?.map((bid) => (
            <BidItem key={bid.id} bid={bid} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailsClientSide;

function BidItem({ bid }: { bid: TBid }) {
  return (
    <Card>
      {/* <CardHeader className="text-primary">Description</CardHeader> */}
      <CardContent className="py-4 flex gap-4">
        <Avatar>
          <AvatarImage src={bid.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <p className="text-gray-600 font-medium ">
            {getRelativeTime(new Date(bid.date))}
          </p>
          <p>{bid.content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
