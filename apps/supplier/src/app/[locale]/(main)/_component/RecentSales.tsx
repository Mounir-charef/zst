import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { nameToSlug } from '../../../../lib/utils';

const sales = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: '/avatars/01.png',
  },
  {
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: '/avatars/02.png',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: '/avatars/03.png',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: '/avatars/04.png',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: '/avatars/05.png',
  },
];

const Sale = ({
  name,
  email,
  amount,
  image,
}: {
  name: string;
  email: string;
  amount: string;
  image: string;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src={image} alt="Avatar" />
        <AvatarFallback>{nameToSlug(name)}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p
          title={name}
          className="max-w-32 truncate text-sm font-medium leading-none"
        >
          {name}
        </p>
        <p
          title={email}
          className="text-muted-foreground max-w-32 truncate text-sm"
        >
          {email}
        </p>
      </div>
    </div>
    <div className="font-medium">{amount}</div>
  </div>
);

export function RecentSales() {
  return (
    <Card className="col-span-2 lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {sales.map((sale, index) => (
            <Sale key={index} {...sale} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
