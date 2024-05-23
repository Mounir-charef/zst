'use client';

import { AppProgressBar } from 'next-nprogress-bar';

import { memo } from 'react';

const ProgressBar = () => {
  return (
    <AppProgressBar
      height="2px"
      color="#fffd00"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default memo(ProgressBar);
