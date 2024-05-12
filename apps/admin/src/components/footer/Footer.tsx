import { cn } from '@mono/util';
import React from 'react';
import { useAppContext } from '../../contexts/appContext';

const Footer = () => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();

  return (
    <footer
      className={cn(
        'bg-background px-8 py-6',
        isCollapsed ? 'lg:ml-[96px]' : 'lg:ml-[280px]',
      )}
    ></footer>
  );
};

export default Footer;
