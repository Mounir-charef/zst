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

interface ProgressCardProps {
  title: string;
  description: string;
  content: string;
  progress: number;
}

const ProgressCard = ({
  content,
  description,
  progress,
  title,
}: ProgressCardProps) => {
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

export default memo(ProgressCard);
