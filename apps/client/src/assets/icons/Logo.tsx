'use client';
import Image from 'next/image';
import { SVGProps, memo } from 'react';
import { logo, logoDark } from '..';
const Logo = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  const theme = localStorage.getItem('theme');
  return theme === 'dark' ? (
    <Image src={logoDark} width={150} height={75} alt="logo" />
  ) : (
    <Image src={logo} width={150} height={75} alt="logo" />
  );
};
export default memo(Logo);
