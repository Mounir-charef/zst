'use client';

import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('hello-world');
  return <div className="text-center font-bold">{t('')}</div>;
};

export default Page;
