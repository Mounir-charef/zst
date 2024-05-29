import { Card, CardContent, CardHeader, Label } from '@mono/ui';

import { ReactNode, Suspense } from 'react';

const ContentCard = ({
  header,
  children,
}: {
  header?: {
    title?: string;
    description?: string;
    children?: ReactNode;
  };
  children?: ReactNode;
}) => {
  return (
    <Card className=" border-none">
      <CardHeader>
        <div className="flex flex-col gap-4">
          {header?.title && <Label className="text-xl">{header.title}</Label>}
          {header?.description && (
            <p className="text-muted-foreground">{header.description}</p>
          )}
          {header?.children}
        </div>
      </CardHeader>
      {children && (
        <CardContent className="space-y-4">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </CardContent>
      )}
    </Card>
  );
};

export default ContentCard;
