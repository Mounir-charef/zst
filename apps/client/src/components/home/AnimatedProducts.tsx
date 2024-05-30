'use client';
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from '@mono/ui';
import { cn } from '@mono/util';
import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CarouselProps = {
  className?: string;
  dataArray: StaticImageData[];
};
const AnimationCarousel = ({ className, dataArray }: CarouselProps) => {
  return (
    <div>
      <Carousel
        orientation="vertical"
        className={cn('h-full w-full max-w-md')}
        opts={{
          align: 'start',
          dragFree: true,
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 800,
          }),
        ]}
      >
        <CarouselContent className={cn('mt-7 h-[600px]', className)}>
          {dataArray.map((data, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2 ">
              <div className="h-full p-2">
                <Card className="h-full rounded-3xl">
                  <CardContent className="relative h-full w-full rounded-[300px]  ">
                    <Image
                      src={data}
                      width={300}
                      height={400}
                      alt={'carouselImage' + index}
                      className="absolute left-0 top-0 h-full w-full object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AnimationCarousel;
