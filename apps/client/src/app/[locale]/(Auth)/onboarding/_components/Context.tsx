'use client';

import { Form } from '@mono/ui';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { steps } from './steps';

interface OnboardingContextContent {
  step: number;
  direction: number;
  content: ReactNode;
  image: string;
  next: () => void;
  back: () => void;
}

const OnboardingContext = createContext<OnboardingContextContent>(
  {} as OnboardingContextContent,
);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    if (step === steps.length - 1) return;
    setDirection(1);
    setStep((prev) => prev + 1);
  }, [step]);

  const back = useCallback(() => {
    if (step === 0) return;
    setDirection(-1);
    setStep((prev) => prev - 1);
  }, [step]);

  const Content = useMemo(() => steps[step].Step, [step]);
  const image = useMemo(() => steps[step].image, [step]);

  return (
    <OnboardingContext.Provider
      value={{ step, direction, next, back, image, content: <Content /> }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
