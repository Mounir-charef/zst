'use client';

import Image from 'next/image';
import { clothingHeroSection } from '../../../assets';
import { Button, Input } from '@mono/ui';
import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { ChangeEvent, useCallback, useRef, useState } from 'react';

export function ClothingHeroSection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState<string>('');

  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  const onSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.set('search', search);
    const queryString = currentSearchParams.toString();
    const updatedUrl = `${pathname}${queryString ? `?${queryString}` : ''}`;

    router.push(updatedUrl);
  };

  return (
    <div className="relative flex justify-center items-center h-[calc(100dvh-80px)] w-full">
      <Image
        src={clothingHeroSection}
        alt="clothings"
        className="h-full w-full absolute top-0 object-cover"
      />

      <div className="flex items-center justify-center flex-col gap-8 z-10">
        <h1 className="text-5xl font-semibold ">Shop your designer dresses</h1>
        <p className="text-lg">
          Ready to wear dresses tailored for you online. Hurry up while stock
          lasts.
        </p>

        <div className="flex w-full">
          <Input
            value={search}
            onChange={onInputChange}
            className="h-14 p-6 rounded-e-none focus-visible:ring-0 focus-visible:ring-offset-0  focus-visible:outline-none  focus-visible:border-1 focus-visible:border-primary "
          />

          <Button
            className="h-14 px-6 rounded-s-none flex gap-2 items-center justify-center"
            onClick={onSearch}
          >
            <Search size={16} /> Search
          </Button>
        </div>
      </div>
    </div>
  );
}
