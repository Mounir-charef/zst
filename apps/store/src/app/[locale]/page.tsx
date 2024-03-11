import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations();
  return (
    <div className="font-bold text-center">
      <h1 className="text-4xl">{t('hello-world-here-agfain')}</h1>
    </div>
  );
};

export default Page;
