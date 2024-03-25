'use client';
import { Button } from '@mono/ui';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { logo } from '../../assets';
import { cn } from '@mono/util';
import LoginModal from '../LoginModal/LoginModal';
import AuthModal from '../LoginModal/AuthModal';
import { Link } from '../../navigation';

const links = [
  {
    url: '#',
    label: 'Shops',
  },
  {
    url: '#',
    label: 'Offers',
  },
  {
    url: '#',
    label: 'Contact',
  },
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        'sticky top-0 bg-primary-foreground flex w-full items-center justify-between h-20 transition-all duration-150 z-20',
        scrolled && 'border-b border-gray-200 '
      )}
    >
      <Link href={'/'} className="flex items-center ">
        <Image src={logo} alt="logo" width={150} height={80} />
      </Link>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          {links?.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="hover:text-primary transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <AuthModal defaultLogin />
          <AuthModal defaultLogin={false} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
