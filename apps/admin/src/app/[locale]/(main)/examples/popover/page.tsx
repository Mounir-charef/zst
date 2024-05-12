'use client';

import { CustomisablePopover } from '@mono/ui';
import { useDisclosure } from '@mono/util';
import { Button } from '../../../../../components/ui/Button';

const PopoverExamplePage = () => {
  const { isOpen, onOpen, setIsOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Open Popover</Button>

      <CustomisablePopover
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        sideOffset={20}
        className="w-[220px]"
      >
        <div className="px-2 py-4">
          <button>Action</button>
        </div>
      </CustomisablePopover>
    </div>
  );
};

export default PopoverExamplePage;
