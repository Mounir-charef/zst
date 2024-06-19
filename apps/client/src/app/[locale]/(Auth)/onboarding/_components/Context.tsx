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
import { SubmitHandler, useForm } from 'react-hook-form';
import { OnboardingForm, onboardingFormSchema } from '../formValidator';
import { zodResolver } from '@hookform/resolvers/zod';

interface OnboardingContextContent {
  step: number;
  direction: number;
  content: ReactNode;
  image: string;
  next: () => void;
  back: () => void;
  validateAndNext: () => void;
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

  const form = useForm<OnboardingForm>({
    resolver: zodResolver(onboardingFormSchema),
  });

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

  const validateAndNext = async () => {
    const fields = steps[step].fields;
    if (!fields) return next();
    // validate fields
    const isValid = await form.trigger(fields, { shouldFocus: true });
    if (!isValid) return;
    next();
  };

  return (
    <OnboardingContext.Provider
      value={{
        step,
        direction,
        next,
        back,
        validateAndNext,
        image,
        content: <Content />,
      }}
    >
      <Form {...form}>{children}</Form>
    </OnboardingContext.Provider>
  );
};
