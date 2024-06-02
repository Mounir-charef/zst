import { Button } from '@mono/ui';
import React from 'react';

const SubNavbar = () => {
  return (
    <div className="bg-primary flex w-full items-center px-6">
      <Button className=" underline">For Shopping</Button>
      <Button>For Bussiness</Button>
    </div>
  );
};

export default SubNavbar;
