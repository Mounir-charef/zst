import { cn } from '@mono/util';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeadingLargeLogoProps {
  className?: string;
}

const HeadingLargeLogo = ({ className }: HeadingLargeLogoProps) => {
  return (
    <Link href={'/'} className={cn(className)}>
      <Image src={'/images/logo.webp'} alt="" width={138} height={34} />
    </Link>
  );
};

export default HeadingLargeLogo;
