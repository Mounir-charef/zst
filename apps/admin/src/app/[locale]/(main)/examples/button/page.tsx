import { Button } from '@mono/ui';
import React from 'react';

const ButtonExamplePage = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Primary</Button>
      <Button variant="destructive">Danger</Button>
      <Button variant="outline">Outline</Button>
      <Button isLoading>Loading</Button>
    </div>
  );
};

export default ButtonExamplePage;
