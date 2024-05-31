'use client';
import Image from 'next/image';
import { memo } from 'react';
import { logo, logoDark } from '..';
const Logo = () => {
  return localStorage.getItem('theme') === 'dark' ? (
    <Image src={logoDark} width={150} height={75} alt="logo" />
  ) : (
    <Image src={logo} width={150} height={75} alt="logo" />
  );
};
export default memo(Logo);
