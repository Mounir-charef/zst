import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { ReactNode, memo } from 'react';

interface ActionCardProps {
  title: string;
  description: string;
  action: ReactNode;
}

const ActionCard = ({ action, description, title }: ActionCardProps) => {
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

export default memo(ActionCard);
