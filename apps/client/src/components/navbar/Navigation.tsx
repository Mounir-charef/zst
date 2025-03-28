import React from 'react';
import SubNavbar from './SubNavbar';
import Navbar from './Navbar';

const Navigation = () => {
  return (
    <div className="flex flex-col border-b">
      <SubNavbar />
      <Navbar />
    </div>
  );
};

export default Navigation;
