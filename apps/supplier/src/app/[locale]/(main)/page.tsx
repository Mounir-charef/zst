import {
  Button,
  DateRangePicker,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@mono/ui';
import { Activity, CreditCard, DollarSignIcon, Users } from 'lucide-react';
import InfoCard from '../../../components/cards/InfoCard';
import { Overview } from './_component/Overview';
import { RecentSales } from './_component/RecentSales';

const DashboardPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center justify-between space-y-2 md:flex-row">
        <h2 className="text-4xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <DateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="h-auto flex-wrap justify-start sm:h-10 sm:justify-center">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              title="Total Revenue"
              content="$45,231.89"
              description=" +20.1% from last month"
              icon={
                <DollarSignIcon className="text-muted-foreground h-4 w-4" />
              }
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Overview />
            <RecentSales />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
