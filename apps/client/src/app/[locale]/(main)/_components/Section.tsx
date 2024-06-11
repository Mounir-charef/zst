import { cn } from '@mono/util';
import { memo } from 'react';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={cn('mx-auto max-w-7xl space-y-8 p-6', className)}>
      {children}
    </section>
  );
};

export default memo(Section);
