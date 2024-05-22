import { Suspense } from 'react';
import Market from './_components/Market';
import { MarketSearchParams } from './_types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import OfferSearchBar from '../../../../components/SearchBar';
import CardFilters from './_components/CardFilters';

const MarketPage = async ({
  searchParams,
}: {
  searchParams: MarketSearchParams;
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap justify-between gap-4">
          <CardTitle>Market place</CardTitle>
          <OfferSearchBar />
        </div>
        <CardDescription>
          Discover our last offers and get best deals
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardFilters />

        <Suspense fallback={<div>Loading...</div>}>
          <Market searchParams={searchParams} />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default MarketPage;
