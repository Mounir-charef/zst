import Image from 'next/image';

const OnboardingPage = () => {
  return (
    <div className="flex h-full">
      <div className="relative hidden h-full w-[600px] lg:block">
        <Image
          src="/cover.png"
          className="object-fill"
          priority
          quality={100}
          fill
          alt="cover"
        />
      </div>
      <div className="flex h-full flex-1 items-center">
        <div className="px-10">alger</div>
      </div>
    </div>
  );
};

export default OnboardingPage;
