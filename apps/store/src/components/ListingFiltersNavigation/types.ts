import { LucideIcon } from 'lucide-react';

export interface TLink {
  id: number;
  href: string;
  title: string;
  Icon?: LucideIcon | null;
  segment?: string;
  children?: TLink[];
}

export interface TLinks {
  [property: string]: {
    title: string;
    links: TLink[];
  };
}
