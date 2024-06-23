import { Button } from '@mono/ui';
import Image from 'next/image';
import { memo } from 'react';

const Ad = () => {
  return (
    <div className="relative flex h-[450px] w-full items-center justify-between rounded-3xl bg-black px-10 text-base text-white">
      <div className="h-full flex-1">
        <Image
          src="/ad.png"
          alt="ad image"
          width={500}
          height={500}
          className="h-full w-[450px]"
          quality={100}
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-4 p-16 py-24">
        <h2 className="text-5xl font-semibold leading-normal">
          Do you want to sell online with ZST?
        </h2>
        <p className="text-sm opacity-70">
          Find everything you need for your business from verified global
          suppliers. Enjoy secure transactions and reliable delivery.
        </p>
        <Button>Get started now</Button>
      </div>
    </div>
  );
};

export default memo(Ad);
