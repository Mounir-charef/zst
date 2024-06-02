'use client';

import { useDisclosure } from '@mono/util';
import ConfirnationModal from '../../../../../../components/common/ConfirnationModal';
import { Button } from '@mono/ui';

const RejectAuction = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, setIsOpen } = useDisclosure();
  return (
    <>
      <div className="contents" onClick={onOpen}>
        {children}
      </div>

      <ConfirnationModal
        buttonText="Reject"
        variant="destructive"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default RejectAuction;
