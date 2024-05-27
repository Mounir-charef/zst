import { HoverCard, HoverCardContent, HoverCardTrigger } from '@mono/ui';
import { AlertCircle } from 'lucide-react';
import React, { ReactNode } from 'react';

const HoverDetails = ({ children }: { children: ReactNode }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <AlertCircle className="stroke-muted-foreground  w-4 rounded-s-md" />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">{children}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverDetails;
