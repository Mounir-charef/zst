'use client';
import { Button } from '@mono/ui';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { logo } from '../../assets';
import { cn } from '@mono/util';

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
        'sticky top-0 bg-primary-foreground flex w-full items-center justify-between px-8 h-20 transition-all duration-150',
        scrolled && 'border-b border-gray-200 '
      )}
    >
      <div className="flex items-center ">
        <Image src={logo} alt="logo" width={150} height={80} />
      </div>
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
          <Button>Join</Button>
          <Button>Become a seller</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
