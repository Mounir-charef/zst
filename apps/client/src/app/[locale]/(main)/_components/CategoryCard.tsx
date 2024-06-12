import { Badge, Card } from '@mono/ui';
import { memo } from 'react';
import { Link } from '../../../../navigation';
import Image from 'next/image';

interface CategoryCardProps {
  image: string;
  title: string;
  badge: string;
  href: string;
}

const CategoryCard = ({ badge, href, image, title }: CategoryCardProps) => {
  return (
    <Card className="aspect-square flex-1 overflow-clip rounded-none rounded-t-2xl border-none">
      <Link href={href} target="_blank" className="flex h-full w-full flex-col">
        <div className="relative flex-1">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
          />
          <Badge
            variant="outline"
            className="bg-background absolute left-2 top-2 z-10"
          >
            {badge}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </Link>
    </Card>
  );
};

export default memo(CategoryCard);
