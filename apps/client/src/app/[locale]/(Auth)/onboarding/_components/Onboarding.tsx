'use client';
import Image from 'next/image';
import { memo } from 'react';
import { useOnboarding } from './Context';

const Onboarding = () => {
  const { step, image } = useOnboarding();
  return (
    <div className="flex h-full">
      <div className="relative hidden h-full flex-[2] lg:block">
        <Image
          src={image}
          className="object-fill"
          priority
          quality={100}
          fill
          alt="cover"
        />
      </div>
      <div className="flex h-full flex-[3] items-center">{step}</div>
    </div>
  );
};

export default memo(Onboarding);
