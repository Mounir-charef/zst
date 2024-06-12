'use client';
import { Card, Carousel, CarouselContent, CarouselItem } from '@mono/ui';
import { cn } from '@mono/util';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

type CarouselProps = {
  className?: string;
  dataArray: string[];
};
const AnimationCarousel = ({ className, dataArray }: CarouselProps) => {
  return (
    <Carousel
      orientation="vertical"
      className="pointer-events-none h-full w-full max-w-md select-none"
      opts={{
        align: 'start',
        dragFree: true,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnMouseEnter: false,
          stopOnFocusIn: false,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent
        className={cn(
          '-mt-2 h-[min(calc(65vh_-_8px),_calc(600px_-_8px))]',
          className,
        )}
      >
        {dataArray.map((data, index) => (
          <CarouselItem key={index} className="basis-1/3 pt-1 ">
            <div className="h-full p-2">
              <Card className="relative h-full overflow-clip rounded-xl">
                <Image
                  src={data}
                  fill
                  alt={'carouselImage' + index}
                  className="object-contain"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AnimationCarousel;
