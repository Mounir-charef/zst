'use client';
import { Button, ButtonProps } from '@mono/ui';
import { memo } from 'react';
import { useOnboarding } from './Context';

const BackButton = (props: ButtonProps) => {
  const { back } = useOnboarding();
  return (
    <Button
      variant="secondary"
      type="button"
      onClick={() => {
        back();
      }}
      {...props}
    />
  );
};

export default memo(BackButton);
