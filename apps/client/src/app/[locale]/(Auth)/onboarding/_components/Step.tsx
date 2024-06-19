import { memo } from 'react';
import { Link } from '../../../../../navigation';

interface StepProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Step = ({ description, title, children }: StepProps) => {
  return (
    <div className="flex max-w-3xl flex-col gap-8 px-10">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-2xl font-bold lg:text-4xl">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      {children}
      <p className="text-muted-foreground text-sm">
        By continuing, you acknowledge and agree to Zadtrip's General{' '}
        <Link href="#" className="text-blue-500 underline">
          Terms of Use
        </Link>{' '}
        and{' '}
        <Link href="#" className="text-blue-500 underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default memo(Step);
