import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
} from '@mono/ui';
import { memo } from 'react';

interface DashboardProgressCardProps {
  title: string;
  description: string;
  content: string;
  progress: number;
}

const DashboardProgressCard = ({
  content,
  description,
  progress,
  title,
}: DashboardProgressCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{description}</CardDescription>
        <CardTitle className="text-4xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground text-xs">{content}</div>
      </CardContent>
      <CardFooter>
        <Progress value={progress} aria-label="25% increase" />
      </CardFooter>
    </Card>
  );
};

export default memo(DashboardProgressCard);
