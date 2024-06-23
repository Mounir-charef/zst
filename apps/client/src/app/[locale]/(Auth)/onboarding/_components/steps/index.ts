import { OnboardingForm } from '../../formValidator';
import AccountSelection from './AccountSelection';
import GoalSelection from './GoalSelection';
import PlanSelection from './PlanSelection';
import RoleSelection from './RoleSelection';
import Welcome from './Welcome';

type step = {
  Step: React.FC;
  image: string;
  fields?: (keyof OnboardingForm)[];
};

export const steps: step[] = [
  {
    Step: Welcome,
    image: '/onboarding/cover.png',
  },
  {
    Step: RoleSelection,
    image: '/onboarding/cover.png',
    fields: ['role'],
  },
  {
    Step: AccountSelection,
    image: '/onboarding/cover-2.png',
    fields: ['newAccount'],
  },
  {
    Step: GoalSelection,
    image: '/onboarding/cover-3.png',
    fields: ['primaryGoal'],
  },
  {
    Step: PlanSelection,
    image: '/onboarding/cover-4.png',
    fields: ['whatToSell'],
  },
];
