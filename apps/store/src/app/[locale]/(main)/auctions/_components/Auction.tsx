'use client';

import { Badge, Button, Card } from '@mono/ui';
import { cn } from '@mono/util';
import { format } from 'date-fns';
import {
  ChevronDown,
  Clock2Icon,
  DollarSignIcon,
  Loader2,
  StoreIcon,
} from 'lucide-react';
import Image from 'next/image';
import { memo, useState } from 'react';
import { useGetAuctions } from '../../../../../hooks/auction/useGetAuctions';
import type {
  Auction as AuctionType,
  AuctionWithOffers,
} from '../../../../../validation/auction-schema';
import { AuctionsParams } from '../../../../../validation/auction-schema';
import FiltersList from './FiltersList';
import Offer from './Offer';

function renderAuctionBadge(auction: AuctionType) {
  switch (auction.status) {
    case 'has_offers':
      return (
        <Badge variant="success">has {auction.offers.length} offers</Badge>
      );
    case 'canceled':
      return <Badge variant="destructive">canceled</Badge>;
    case 'on_auction':
      return <Badge variant="info">on auction</Badge>;
    case 'pending':
      return <Badge variant="warning">pending</Badge>;
  }
}

function renderAuctionActions(auction: AuctionType) {
  switch (auction.status) {
    case 'on_auction':
      return (
        <Button variant="outline" className="text-destructive">
          Cancel
        </Button>
      );
  }
}

const HasOfferAuction = memo(({ auction }: { auction: AuctionWithOffers }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card key={auction.id} className="divide-y">
      <div className="flex items-center gap-8 p-4">
        <Image
          src={auction.image}
          alt={auction.name}
          width={100}
          height={100}
          className="size-[100px] rounded-lg object-cover"
        />
        <div className="flex-1 space-y-2">
          <h3 className="font-medium">{auction.name}</h3>
          {renderAuctionBadge(auction)}
          <div className="flex flex-col flex-wrap gap-1 whitespace-nowrap md:flex-row">
            <div className="flex flex-1 flex-col gap-2 border-s-4 ps-4 text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="text-muted-foreground flex items-center gap-0.5">
                    <DollarSignIcon
                      size={12}
                      className="bg-muted-foreground stroke-background rounded-sm"
                    />
                    Price
                  </div>
                  <span className="font-medium">{`${auction.price.min}$ - ${auction.price.max}$`}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="text-muted-foreground flex items-center gap-0.5">
                    <StoreIcon size={12} className="stroke-muted-foreground" />
                    Quantity
                  </div>
                  <span className="font-medium">{`${auction.quantity.min} - ${auction.quantity.max}`}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-muted-foreground flex items-center gap-1.5">
                  <Clock2Icon size={12} />
                  Created
                </div>
                <span className="font-medium">
                  {format(new Date(auction.created_at), 'PPpp')}
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-success-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'Show less' : 'Show more'}{' '}
              <ChevronDown
                size={16}
                className={cn('transition-transform', {
                  'rotate-180': isOpen,
                })}
              />
              <span className="sr-only">about {auction.name}</span>
            </Button>
          </div>
        </div>
      </div>
      {isOpen
        ? auction.offers.map((offer) => (
            <Offer offer={offer} key={offer.id} auction={auction} />
          ))
        : null}
    </Card>
  );
});

const HasNoOfferAuction = memo(({ auction }: { auction: AuctionType }) => {
  return (
    <Card key={auction.id} className="divide-y">
      <div className="flex items-center gap-8 p-4">
        <Image
          src={auction.image}
          alt={auction.name}
          width={100}
          height={100}
          className="size-[100px] rounded-lg object-cover"
        />
        <div className="flex-1 space-y-2">
          <h3 className="font-medium">{auction.name}</h3>
          {renderAuctionBadge(auction)}
          <div className="flex flex-col flex-wrap gap-1 whitespace-nowrap md:flex-row">
            <div className="flex flex-1 flex-col gap-2 border-s-4 ps-4 text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <div className="text-muted-foreground flex items-center gap-0.5">
                    <DollarSignIcon
                      size={12}
                      className="bg-muted-foreground stroke-background rounded-sm"
                    />
                    Price
                  </div>
                  <span className="font-medium">{`${auction.price.min}$ - ${auction.price.max}$`}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="text-muted-foreground flex items-center gap-0.5">
                    <StoreIcon size={12} className="stroke-muted-foreground" />
                    Quantity
                  </div>
                  <span className="font-medium">{`${auction.quantity.min} - ${auction.quantity.max}`}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-muted-foreground flex items-center gap-1.5">
                  <Clock2Icon size={12} />
                  Created
                </div>
                <span className="font-medium">
                  {format(new Date(auction.created_at), 'PPpp')}
                </span>
              </div>
            </div>
            {renderAuctionActions(auction)}
          </div>
        </div>
      </div>
    </Card>
  );
});

function renderAuction(auction: AuctionType) {
  switch (auction.status) {
    case 'has_offers':
      return <HasOfferAuction key={auction.id} auction={auction} />;
    default:
      return <HasNoOfferAuction key={auction.id} auction={auction} />;
  }
}

const Auction = (params: AuctionsParams) => {
  const { data, isLoading, isError, refetch } = useGetAuctions(params);

  if (isLoading) {
    return (
      <div className="grid h-96 flex-1 place-items-center">
        <Loader2 className="text-primary animate-spin" />
      </div>
    );
  }
  if (isError || !data) {
    return (
      <div className="grid h-96 flex-1 place-items-center">
        <div>Something went wrong</div>
        <Button variant="outline" onClick={() => refetch()}>
          Retry
        </Button>
      </div>
    );
  }

  if (data.length === 0) {
    return <div>No auctions found</div>;
  }

  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-lg font-semibold">
        {data.length} results found for you
      </h2>
      <FiltersList />
      <div className="grid grid-cols-1 gap-4">
        {data.map((auction) => renderAuction(auction))}
      </div>
    </div>
  );
};

export default memo(Auction);
