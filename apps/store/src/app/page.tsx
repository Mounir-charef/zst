'use client';

import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';
import { Loader2 } from 'lucide-react';

const Page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['hello'],
    queryFn: () =>
      axiosInstance.get('/api/hello').then((res) => res.data as string),
  });
  if (isLoading)
    return (
      <div className="font-bold text-center">
        <Loader2 className="animate-spin mx-auto" />
      </div>
    );
  return (
    <div className="font-bold text-center">
      <h1 className="text-4xl">Store: {data}</h1>
    </div>
  );
};

export default Page;
