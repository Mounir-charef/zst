import { DashboardIcon } from '@radix-ui/react-icons';
import { SettingsIcon } from 'lucide-react';

export const userMenuLinks = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <DashboardIcon className="h-4 w-4" />,
    desktopOnly: true,
  },
  {
    label: 'Settings',
    href: '#',
    icon: <SettingsIcon className="h-4 w-4" />,
    desktopOnly: false,
  },
] as const;
