import React from 'react';
import { Button } from '../../../../../components/ui/Button';
import { CardFooter } from '@mono/ui';

const ProfileSubmitButton = ({ text = 'Save Changes' }: { text?: string }) => {
  return (
    <CardFooter className="flex justify-end">
      <Button type="submit">{text}</Button>
    </CardFooter>
  );
};

export default ProfileSubmitButton;
