'use client';

import dynamic from 'next/dynamic';
import { ClientOnly } from './ClientOnly';
import { TexteditorContentProps } from './TexteditorContent';

const TexteditorContent = dynamic(() => import('./TexteditorContent'), {
  ssr: false,
});

export const Texteditor = (props: TexteditorContentProps) => {
  return (
    <ClientOnly>
      <TexteditorContent {...props} />
    </ClientOnly>
  );
};
