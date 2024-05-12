import React from 'react';
import { Button } from '../../../../../components/ui/Button';
import { FaArrowRight } from 'react-icons/fa';

const ButtonExamplePage = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Primary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
      <Button Icon={FaArrowRight}>With Icon</Button>
      <Button borderless variant="outline">
        Borderless
      </Button>
      <Button isLoading variant="primary">
        Loading
      </Button>
    </div>
  );
};

export default ButtonExamplePage;
