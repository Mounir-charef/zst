'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useOnboarding } from './Context';

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

const imageVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const Onboarding = () => {
  const { step, direction, image, content } = useOnboarding();

  return (
    <div className="relative flex h-full overflow-hidden">
      <div className="relative hidden h-full flex-[2] lg:block">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={image}
            className="absolute inset-0 z-10 overflow-hidden"
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Image
              src={image}
              className="object-fill"
              priority
              quality={100}
              fill
              alt="cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex h-full flex-[3] items-center overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={step}
            className="w-full overflow-hidden"
            custom={direction}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;
