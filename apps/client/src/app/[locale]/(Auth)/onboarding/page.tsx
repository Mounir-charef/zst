import { OnboardingProvider } from './_components/Context';
import Onboarding from './_components/Onboarding';

const OnboardingPage = () => {
  return (
    <OnboardingProvider>
      <Onboarding />
    </OnboardingProvider>
  );
};

export default OnboardingPage;
