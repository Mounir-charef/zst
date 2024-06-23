'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { OnboardingForm } from '../formValidator';
import { useOnboarding } from './Context';
import { steps } from './steps';
import { cn } from '@mono/util';

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const Onboarding = () => {
  const { step, direction, image, content } = useOnboarding();
  const { handleSubmit } = useFormContext<OnboardingForm>();

  const submit: SubmitHandler<OnboardingForm> = (data) => {
    console.log(data);
  };

  return (
    <div className="relative flex h-full overflow-hidden">
      <div className="relative hidden h-full flex-[2] lg:block">
        <div className="absolute inset-0 z-10 overflow-hidden">
          {steps.map(({ image: stepImage }) => (
            <Image
              key={stepImage}
              src={stepImage}
              className={cn(
                'object-fill opacity-0 transition-opacity duration-500 ease-in-out',
                {
                  'opacity-100': stepImage === image,
                },
              )}
              priority
              quality={100}
              fill
              rel="preload"
              alt="cover"
            />
          ))}
        </div>
      </div>
      <div className="flex h-full flex-[3] items-center overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.form
            key={step}
            className="w-full overflow-hidden"
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            onSubmit={handleSubmit(submit)}
          >
            {content}
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;
