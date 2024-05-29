import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  buttonVariants,
} from '@mono/ui';
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSignIcon,
  Loader2,
  Users,
} from 'lucide-react';
import InfoCard from '../../../components/cards/InfoCard';
import RecentTransactionsTable from './_components/RecentTransactionsTable';
import { Link } from '../../../navigation';
import { Suspense } from 'react';

export default async function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 md:gap-8 ">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <InfoCard
          title="Total Revenue"
          content="$45,231.89"
          description=" +20.1% from last month"
          icon={<DollarSignIcon className="text-muted-foreground h-4 w-4" />}
        />

        <InfoCard
          title="Subscriptions"
          content="+2350"
          description="+180.1% from last month"
          icon={<Users className="text-muted-foreground h-4 w-4" />}
        />

        <InfoCard
          title="Sales"
          content="+12,234"
          description="+19% from last month"
          icon={<CreditCard className="text-muted-foreground h-4 w-4" />}
        />

        <InfoCard
          title="Active Now"
          content="+573"
          description="+201 since last hour"
          icon={<Activity className="text-muted-foreground h-4 w-4" />}
        />
      </div>
      <div className="grid w-full gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-5">
        <Card className="w-full overflow-x-auto xl:col-span-3">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Transactions</CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
            <Link
              target="_blank"
              className={buttonVariants({
                size: 'sm',
                className: 'ml-auto gap-1',
              })}
              href="#"
            >
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <Suspense
            fallback={
              <CardContent className="flex h-44 items-center justify-center">
                <Loader2 className="text-primary h-8 w-8 animate-spin" />
              </CardContent>
            }
          >
            <RecentTransactionsTable />
          </Suspense>
        </Card>
        <Card className="h-fit xl:col-span-2">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin@email.com
                </p>
              </div>
              <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/02.png" alt="Avatar" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                <p className="text-muted-foreground text-sm">
                  jackson.lee@email.com
                </p>
              </div>
              <div className="ml-auto font-medium">+$39.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/03.png" alt="Avatar" />
                <AvatarFallback>IN</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Isabella Nguyen
                </p>
                <p className="text-muted-foreground text-sm">
                  isabella.nguyen@email.com
                </p>
              </div>
              <div className="ml-auto font-medium">+$299.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/04.png" alt="Avatar" />
                <AvatarFallback>WK</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">William Kim</p>
                <p className="text-muted-foreground text-sm">will@email.com</p>
              </div>
              <div className="ml-auto font-medium">+$99.00</div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/05.png" alt="Avatar" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">Sofia Davis</p>
                <p className="text-muted-foreground text-sm">
                  sofia.davis@email.com
                </p>
              </div>
              <div className="ml-auto font-medium">+$39.00</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
