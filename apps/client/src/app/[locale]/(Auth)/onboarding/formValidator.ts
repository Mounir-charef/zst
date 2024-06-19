import { z } from 'zod';

export const onboardingFormSchema = z.object({
  newAccount: z.boolean(),
  primaryGoal: z.string(),
  whatToSell: z.object({
    products: z.array(z.string()),
    other: z.boolean(),
  }),
});

export type OnboardingForm = z.infer<typeof onboardingFormSchema>;
