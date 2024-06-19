'use client';
import { Button, ButtonProps } from '@mono/ui';
import { memo } from 'react';
import { useOnboarding } from './Context';

const NextButton = (props: ButtonProps) => {
  const { next } = useOnboarding();
  return (
    <Button
      type="button"
      onClick={() => {
        next();
      }}
      {...props}
    />
  );
};

export default memo(NextButton);
