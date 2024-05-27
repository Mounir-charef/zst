import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from '@mono/ui';
import { Metadata } from 'next';
import Image from 'next/image';
import { SidebarNav } from './_components/SidebarNav';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Advanced form example using react-hook-form and Zod.',
};

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/settings',
  },
  {
    title: 'Account',
    href: '/settings/account',
  },
  {
    title: 'Password Management',
    href: '/settings/password',
  },
  {
    title: 'Notifications',
    href: '/settings/notifications',
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <Card className="divide-y">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          Manage your account settings and set e-mail preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-8 pt-6 lg:flex-row">
        <SidebarNav items={sidebarNavItems} className="min-w-44" />
        <Separator className="lg:hidden" />
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </CardContent>
    </Card>
  );
}
