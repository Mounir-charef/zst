import { cn } from '@mono/util';
import { memo } from 'react';
import { Link } from '../../../../../../navigation';
import NextButton from '../NextButton';

const Welcome = () => {
  return (
    <div className="flex max-w-3xl flex-col gap-8 px-10">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-2xl font-bold lg:text-4xl">Welcome to ZST</h1>
        <p className="text-sm">
          We're thrilled to welcome you to our marketplace for unique and
          creative goods, where special items with a personal touch shine. Ready
          to bring your shop to life?
        </p>
      </div>
      <Stepper />
      <NextButton className="w-fit">Let's do this</NextButton>
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

const Stepper = () => {
  return (
    <div className="flex max-w-lg flex-col">
      <Step
        title="Make your shop uniquely yours"
        description="We'll walk you through every steps, from choosing a name to creating your first  listing"
        active
      />
      <Step
        title="Tell us a bit about yourself"
        description="Share some info and set up  how you'll get paid with Zst"
        active
      />
      <Step
        title="Get your first sale"
        description="We'll give you some of tips to help you start selling and grow your business in no time."
      />
    </div>
  );
};

const Step = ({
  title,
  description,
  active = false,
}: {
  title: string;
  description: string;
  active?: boolean;
}) => (
  <div
    className={cn(
      'relative space-y-2 border-yellow-400 ps-6 before:absolute before:start-0 before:top-0 before:size-4 before:-translate-x-1/2 before:rounded-full before:bg-yellow-400',
      {
        'border-s pb-6': active,
      },
    )}
  >
    <h3 className="font-medium leading-none">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default memo(Welcome);
