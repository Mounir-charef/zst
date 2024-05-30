'use client';

import { cn } from '@mono/util';
import Image from 'next/image';
import React from 'react';
import { Link } from '../../navigation';
import { useTheme } from 'next-themes';
import themeConfig from '../../config/themeConfig';

interface HeadingLargeLogoProps {
  className?: string;
}

const HeadingLargeLogo = ({ className }: HeadingLargeLogoProps) => {
  const { theme } = useTheme();
  return (
    <Link href={'/'} className={cn(className)}>
      <Image
        src={
          theme === themeConfig.LIGHT
            ? '/images/logo.png'
            : '/images/logo-dark.png'
        }
        alt=""
        width={138}
        height={34}
      />
    </Link>
  );
};

export default HeadingLargeLogo;
