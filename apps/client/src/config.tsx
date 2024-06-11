import { DashboardIcon } from '@radix-ui/react-icons';
import {
  CameraIcon,
  CarIcon,
  DrillIcon,
  DumbbellIcon,
  Gamepad2Icon,
  HomeIcon,
  LaptopIcon,
  SettingsIcon,
  ShapesIcon,
  ShirtIcon,
  Smartphone,
  SproutIcon,
  TvIcon,
} from 'lucide-react';

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

export const categoriesLinks: {
  label: string;
  params: Record<string, string>;
  icon: JSX.Element;
}[] = [
  {
    label: 'gaming',
    params: { category: 'gaming' },
    icon: <Gamepad2Icon className="size-6" />,
  },
  {
    label: 'mobility',
    params: { category: 'mobility' },
    icon: <CarIcon className="size-6" />,
  },
  {
    label: 'tv',
    params: { category: 'tv' },
    icon: <TvIcon className="size-6" />,
  },
  {
    label: 'phone',
    params: { category: 'phone' },
    icon: <Smartphone className="size-6" />,
  },
  {
    label: 'clothing',
    params: { category: 'clothing' },
    icon: <ShirtIcon className="size-6" />,
  },
  {
    label: 'home',
    params: { category: 'home' },
    icon: <HomeIcon className="size-6" />,
  },
  {
    label: 'kids',
    params: { category: 'kids' },
    icon: <ShapesIcon className="size-6" />,
  },
  {
    label: 'diy',
    params: { category: 'diy' },
    icon: <DrillIcon className="size-6" />,
  },
  {
    label: 'pc',
    params: { category: 'pc' },
    icon: <LaptopIcon className="size-6" />,
  },
  {
    label: 'sport',
    params: { category: 'sport' },
    icon: <DumbbellIcon className="size-6" />,
  },
  {
    label: 'camera',
    params: { category: 'camera' },
    icon: <CameraIcon className="size-6" />,
  },
  {
    label: 'garding',
    params: { category: 'garding' },
    icon: <SproutIcon className="size-6" />,
  },
];
