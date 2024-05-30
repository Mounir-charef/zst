import React from 'react';
import HeroText from './HeroText';
import HeroSearch from './HeroSearch';
import ShowCaseBackground from './ShowCaseBackground';

const Hero = () => {
  return (
    <section className="text-background  flex h-[60vh] w-full flex-col items-center overflow-hidden rounded-3xl bg-black px-10 text-base md:flex-row">
      <div className="flex h-full flex-col justify-center gap-6 p-16 py-24 text-start">
        <HeroText />
        <HeroSearch />
      </div>
      <ShowCaseBackground />
    </section>
  );
};

export default Hero;
