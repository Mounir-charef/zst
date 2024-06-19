import Welcome from './Welcome';

type step = {
  Step: React.FC;
  image: string;
};

export const steps: step[] = [
  {
    Step: Welcome,
    image: '/cover.png',
  },
  {
    Step: Welcome,
    image: '/cover.png',
  },
];
