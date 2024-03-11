import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const localePrefix = 'always';
export const dirs: {
  [key in Locale]: string;
} = {
  en: 'ltr',
  ar: 'rtl',
};

export const countriesCode: { [key in Locale]: string } = {
  en: 'GB',
  ar: 'DZ',
} as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
