import { Button } from '@mono/ui';
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';
import ActionCard from '../../../../components/cards/ActionCard';
import OrderCard from './_components/OrderCard';
import ProgressCard from '../../../../components/cards/ProgressCard';
import { OrderProvider } from './_components/OrderProvider';
import OrdersTable from './_components/OrdersTable';

export default async function Dashboard() {
  return (
    <OrderProvider>
      <div className="mx-auto grid gap-4 md:grid-cols-[2fr_1fr] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <ActionCard
              action={<Button>Create New Order</Button>}
              title="Your Orders"
              description="Introducing Our Dynamic Orders Dashboard for Seamless Management
                  and Insightful Analysis."
            />

            <ProgressCard
              content="+25% from last week"
              description="This Week"
              title="$1,329"
              progress={25}
            />
            <ProgressCard
              content="+10% from last month"
              description="This Month"
              title="$5,329"
              progress={10}
            />
          </div>
          <div className="w-full overflow-x-auto">
            <Suspense
              fallback={
                <div className="flex h-96 items-center justify-center">
                  <Loader2 className="text-primary size-8 animate-spin" />
                </div>
              }
            >
              <OrdersTable />
            </Suspense>
          </div>
        </div>
        <OrderCard />
      </div>
    </OrderProvider>
  );
}
