import React from 'react';
import AnimationCarousel from './AnimatedProducts';
import { carouse1, carouse2, carouse3 } from './carousel-data';

const ShowCaseBackground = () => {
  return (
    <div className="relative ml-auto grid h-full min-w-[40%] grid-cols-3 place-items-center gap-0 overflow-hidden">
      <span className="pointer-events-none absolute -bottom-0 z-10 h-2/6 w-full bg-gradient-to-t from-black/75 to-transparent"></span>
      <span className="pointer-events-none absolute -top-0 z-10 h-2/6 w-full bg-gradient-to-b from-black/75 to-transparent"></span>
      <div className="h-full w-full ">
        <AnimationCarousel dataArray={carouse1} />
      </div>
      <div className="h-full w-full">
        <AnimationCarousel dataArray={carouse2} className="mt-20" />
      </div>{' '}
      <div className="h-full w-full">
        <AnimationCarousel dataArray={carouse3} />
      </div>
    </div>
  );
};

export default ShowCaseBackground;
