import {
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
import { Suspense } from 'react';
import InfoCard from '../../../components/cards/InfoCard';
import { Link } from '../../../navigation';
import RecentTransactionsTable from './_components/RecentTransactionsTable';
import Sales from './_components/Sales';

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
            <CardDescription>Recent sales from your store.</CardDescription>
          </CardHeader>
          <Suspense
            fallback={
              <CardContent className="flex h-44 items-center justify-center">
                <Loader2 className="text-primary h-8 w-8 animate-spin" />
              </CardContent>
            }
          >
            <Sales />
          </Suspense>
        </Card>
      </div>
    </main>
  );
}
