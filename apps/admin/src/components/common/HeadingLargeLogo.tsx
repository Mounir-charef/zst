import { cn } from '@mono/util';
import Image from 'next/image';
import React from 'react';
import { Link } from '../../navigation';

interface HeadingLargeLogoProps {
  className?: string;
}

const HeadingLargeLogo = ({ className }: HeadingLargeLogoProps) => {
  return (
    <Link href={'/'} className={cn(className)}>
      <Image src={'/images/logo.png'} alt="" width={138} height={34} />
    </Link>
  );
};

export default HeadingLargeLogo;
