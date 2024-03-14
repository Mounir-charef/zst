import { Shirt } from 'lucide-react';

import { LucideIcon } from 'lucide-react';

export interface TLink {
  id: number;
  href: string;
  title: string;
  Icon?: LucideIcon | null;
  segment?: string;
  children?: TLink[];
}

export type TLinks = TLink[];
