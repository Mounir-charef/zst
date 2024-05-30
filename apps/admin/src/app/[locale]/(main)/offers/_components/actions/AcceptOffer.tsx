'use client';
import React from 'react';
import ConfirnationModal from '../../../../../../components/common/ConfirnationModal';
import { useDisclosure } from '@mono/util';

const AcceptOffer = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, setIsOpen } = useDisclosure();
  return (
    <>
      <div className="contents" onClick={onOpen}>
        {children}
      </div>
      <ConfirnationModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        buttonText="Accept"
        variant="success"
      />
    </>
  );
};

export default AcceptOffer;
