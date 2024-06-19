import RoleSelection from './RoleSelection';
import Welcome from './Welcome';

type step = {
  Step: React.FC;
  image: string;
  fields?: string[];
};

export const steps: step[] = [
  {
    Step: Welcome,
    image: '/cover.png',
  },
  {
    Step: RoleSelection,
    image: '/cover.png',
  },
];
