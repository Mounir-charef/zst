'use client';

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
  step: ReactNode;
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
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    if (index === steps.length - 1) return;
    setIndex((prev) => prev + 1);
  }, [index]);

  const back = useCallback(() => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  }, [index]);

  const Step = useMemo(() => steps[index].Step, [index]);
  const image = useMemo(() => steps[index].image, [index]);

  return (
    <OnboardingContext.Provider value={{ step: <Step />, next, back, image }}>
      {children}
    </OnboardingContext.Provider>
  );
};
