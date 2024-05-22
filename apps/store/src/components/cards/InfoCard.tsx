import { Card, CardContent, CardHeader, CardTitle } from '@mono/ui';
import { DollarSignIcon } from 'lucide-react';
import { memo } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  content: string;
  icon: React.ReactNode;
}

const InfoCard = ({ content, description, icon, title }: InfoCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  );
};

export default memo(InfoCard);
