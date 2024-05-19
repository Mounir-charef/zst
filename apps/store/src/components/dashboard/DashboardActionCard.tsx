import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { ReactNode, memo } from 'react';

interface DashboardActionCardProps {
  title: string;
  description: string;
  action: ReactNode;
}

const DashboardActionCard = ({
  action,
  description,
  title,
}: DashboardActionCardProps) => {
  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>{action}</CardFooter>
    </Card>
  );
};

export default memo(DashboardActionCard);
