import { cn } from '@mono/util';
import { memo } from 'react';
import Step from '../Step';
import { Button } from '@mono/ui';
import { useOnboarding } from '../Context';

const Welcome = () => {
  const { next } = useOnboarding();
  return (
    <Step
      title="Welcome to ZST"
      description="We're thrilled to welcome you to our marketplace for unique and
          creative goods, where special items with a personal touch shine. Ready
          to bring your shop to life?"
    >
      <Stepper />
      <Button onClick={next} type="button" className="w-fit">
        Let's do this
      </Button>
    </Step>
  );
};

const Stepper = () => {
  return (
    <div className="flex max-w-lg flex-col">
      <Item
        title="Make your shop uniquely yours"
        description="We'll walk you through every steps, from choosing a name to creating your first  listing"
        active
      />
      <Item
        title="Tell us a bit about yourself"
        description="Share some info and set up  how you'll get paid with Zst"
        active
      />
      <Item
        title="Get your first sale"
        description="We'll give you some of tips to help you start selling and grow your business in no time."
      />
    </div>
  );
};

const Item = ({
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
