import { DashboardIcon } from '@radix-ui/react-icons';
import { SettingsIcon } from 'lucide-react';

export const userMenuLinks = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <DashboardIcon className="size-4" />,
    desktopOnly: true,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: <SettingsIcon className="size-4" />,
    desktopOnly: false,
  },
] as const;
