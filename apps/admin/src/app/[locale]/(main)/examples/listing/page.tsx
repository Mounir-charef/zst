import React from 'react';
import axiosHttpClient from '../../../../../apis/clients/_axios-httpClient';
import ListingPageContent from './_components/ListingContent';
import useServerData from '../../../../../hooks/useServerData';
import { getUserQueryOptions } from '../../../../../apis/userApis';

const initUsers = async () => {
  const response = await axiosHttpClient.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  return response.data;
};

const ListingPage = async () => {
  const { ServerData } = await useServerData({
    ...getUserQueryOptions,
  });

  return (
    <ServerData>
      <ListingPageContent />
    </ServerData>
  );
};

export default ListingPage;
