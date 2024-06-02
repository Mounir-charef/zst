'use client';

import React from 'react';
import PageTitle from '../../common/PageTitle';
import Link from 'next/link';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Button } from '@mono/ui';

interface FormHeaderProps {
  title: string;
  backHref: string;
}

const FormHeader = ({ title, backHref }: FormHeaderProps) => {
  return (
    <div className=" mb-4 flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <Link
          href={backHref}
          className="bg-background flex h-7 w-7 items-center justify-center rounded border"
        >
          <IoChevronBackSharp />
        </Link>
        <PageTitle>{title}</PageTitle>
      </div>
      <div>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default FormHeader;
