'use strict';

import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { availableLocaleCodes } from '../i18n/locales';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: availableLocaleCodes });
