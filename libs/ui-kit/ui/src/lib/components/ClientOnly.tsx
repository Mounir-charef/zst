'use client';

import dynamic from 'next/dynamic';
import { FunctionComponent, PropsWithChildren } from 'react';

const ClientOnly: FunctionComponent<PropsWithChildren> = ({ children }) =>
  children;

const ClientOnlyDynamic = dynamic(() => Promise.resolve(ClientOnly), {
  ssr: false,
});

export { ClientOnlyDynamic as ClientOnly };
