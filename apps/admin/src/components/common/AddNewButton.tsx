import { buttonVariants } from '@mono/ui';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { CiCirclePlus } from 'react-icons/ci';
import React from 'react';

interface AddNewButtonProps {
  text: string;
  href: string;
}

const AddNewButton = ({ href, text }: AddNewButtonProps) => {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: 'default',
        className: 'h-8',
      })}
    >
      <CiCirclePlus className="me-2 h-4 w-4" /> {text}
    </Link>
  );
};

export default AddNewButton;
