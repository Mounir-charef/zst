import { cn } from '@mono/util';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '../../ui/carousel';
import Image from 'next/image';

const ThumbnailCarousel = ({
  images,
  setApi,
  current,
  onThumbClick,
  contentClassName,
  itemClassName,
  className,
}: {
  images: {
    src: string;
    alt: string;
  }[];
  setApi: (api: CarouselApi) => void;
  current: number;
  onThumbClick: (index: number) => void;
  contentClassName?: string;
  itemClassName?: string;
  className?: string;
}) => {
  //   const currentNode = useMemo(
  //     () => thumbnailApi?.slideNodes()[current],
  //     [thumbnailApi, current],
  //   );

  return (
    <Carousel
      opts={{
        containScroll: 'keepSnaps',
        dragFree: true,
        startIndex: current,
      }}
      setApi={setApi}
      className={cn('w-full', className)}
      aria-label="thumbnail carousel"
    >
      <div className="relative">
        <CarouselContent className={cn('m-0 gap-4 p-1', contentClassName)}>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={cn(
                'relative flex-0 w-20 h-20 shrink-0 flex aspect-square  cursor-pointer overflow-hidden pl-0 basis-auto ',
                {
                  'ring ring-blue-500/50 ': current === index,
                },
                itemClassName
              )}
              aria-label="thumbnail"
              onClick={() => onThumbClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={390}
                priority
                className="aspect-square w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

export default ThumbnailCarousel;
