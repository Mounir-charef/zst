import { OnboardingForm } from '../../formValidator';
import AccountSelection from './AccountSelection';
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
];
