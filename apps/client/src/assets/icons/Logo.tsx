'use client';
import Image from 'next/image';
import { memo } from 'react';
import { logo, logoDark } from '..';
const Logo = () => {
  return (
    <>
      <Image
        className="hidden dark:block"
        src={logoDark}
        width={150}
        height={75}
        alt="logo"
      />
      <Image
        className="dark:hidden"
        src={logo}
        width={150}
        height={75}
        alt="logo"
      />
    </>
  );
};
export default memo(Logo);
