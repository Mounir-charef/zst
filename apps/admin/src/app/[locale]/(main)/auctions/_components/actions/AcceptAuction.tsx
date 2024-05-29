'use client';

import { useDisclosure } from '@mono/util';
import React from 'react';
import { Modal, ModalBody } from '../../../../../../components/ui/Modal';
import { Button, CustomisableAvatar, Form, FormFieldsWrapper } from '@mono/ui';
import SelectField from '../../../../../../components/ui/form/select/SelectField';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const AcceptAuctionModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const form = useForm({});
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form {...form}>
        <ModalBody>
          <FormFieldsWrapper>
            <SelectField
              name="suppliers"
              label="Suppliers"
              control={form.control}
              isMulti
              //   menuIsOpen
              menuPortalTarget={document.body}
              styles={{
                menuPortal(provided) {
                  return { ...provided, pointerEvents: 'auto', zIndex: 60 };
                },
              }}
              options={Array.from({ length: 5 }).map((_, index) => {
                return {
                  label: (
                    <div className="flex items-center gap-2">
                      <CustomisableAvatar
                        src="/images/user-avatar.webp"
                        size={16}
                      />
                      <span className="text-foreground">Mohamed Cherif</span>
                    </div>
                  ),
                  value: index,
                };
              })}
            />
          </FormFieldsWrapper>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant={'success'}>Accept</Button>
          </div>
        </ModalBody>
      </Form>
    </Modal>
  );
};

const AcceptAuction = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, setIsOpen } = useDisclosure();
  return (
    <>
      <div onClick={onOpen} className="contents">
        {children}
      </div>

      <AcceptAuctionModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AcceptAuction;
