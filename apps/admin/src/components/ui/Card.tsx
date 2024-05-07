import { Card as SharedCard, CardContent as SharedCardContent } from '@mono/ui';
import { cn } from '@mono/util';

const Card = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SharedCard className={cn('bg-white rounded-md', className)} {...props}>
      {children}
    </SharedCard>
  );
};

const CardContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <SharedCardContent className={cn('p-5 md:p-8', className)} {...props}>
      {children}
    </SharedCardContent>
  );
};

export { Card, CardContent };
