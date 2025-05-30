import { z } from 'zod';

export const onboardingFormSchema = z.object({
  role: z.enum(['seller', 'supplier']),
  newAccount: z.enum(['new', 'existing']),
  primaryGoal: z.string(),
  whatToSell: z.array(z.string()),
});

export type OnboardingForm = z.infer<typeof onboardingFormSchema>;
