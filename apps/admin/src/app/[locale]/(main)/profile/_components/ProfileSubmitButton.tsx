import React from 'react';
import { Button } from '../../../../../components/ui/Button';

const ProfileSubmitButton = ({ text = 'Save Changes' }: { text?: string }) => {
  return (
    <div className="mt-4 flex w-full justify-end">
      <Button type="submit">{text}</Button>
    </div>
  );
};

export default ProfileSubmitButton;
