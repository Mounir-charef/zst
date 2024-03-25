'use client';

import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Heart,
  Maximize2,
  Minimize2,
  Share2,
  Twitter,
} from 'lucide-react';
import { FC, useCallback, useEffect, useState } from 'react';
import ThumbnailCarousel from './ThumbnailCarousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../../ui/carousel';
import { Dialog, DialogContent } from '../../ui/dialog';
import { cn } from '@mono/util';
import Link from 'next/link';
import Image from 'next/image';

interface ImageCarouselProps {
  overplay?: boolean;
  expanable?: boolean;
  hasLike?: boolean;
  socials?: {
    facebookLink?: string;
    twitterLink?: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
  thumbnailProps?: {
    itemClassName?: string;
    contentClassName?: string;
  };
  className?: string;
}

const ImageCarousel: FC<ImageCarouselProps> = ({
  images,
  overplay = true,
  socials,
  expanable,
  hasLike = false,
  thumbnailProps,
  className,
}) => {
  const [api, setApi] = useState<CarouselApi>();

  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [like, setLike] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api || !thumbnailApi) return;
      api.scrollTo(index);
    },
    [api, thumbnailApi]
  );

  const scrollNext = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  const scrollPrev = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
  }, [api]);

  const onSelect = useCallback(() => {
    if (!api || !thumbnailApi) return;
    thumbnailApi.scrollTo(api.selectedScrollSnap());
    setCurrent(api.selectedScrollSnap());
  }, [api, thumbnailApi, setCurrent]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
  }, [api, onSelect]);

  if (isExpanded) {
    return (
      <Dialog open onOpenChange={setIsExpanded}>
        <DialogContent
          dir="ltr"
          animate={false}
          hasCloseButton={false}
          className="h-screen w-screen flex flex-col  items-center max-w-none border-none bg-black/20 backdrop-blur-sm pt-0 sm:rounded-none lg:px-52"
        >
          <div
            className={cn(
              'select-none flex flex-col gap-8 items-center justify-center h-full  ',
              className
            )}
          >
            <Carousel
              setApi={setApi}
              opts={{
                startIndex: current,
                loop: true,
              }}
            >
              <div className="group relative w-full flex justify-center items-center  h-full   ">
                {overplay && (
                  <>
                    <div
                      onClick={scrollPrev}
                      className={cn(
                        'absolute inset-y-0 start-4 z-50 my-auto grid h-12 w-12 cursor-pointer place-items-center rounded bg-secondary/50 opacity-0 transition-all will-change-transform ',

                        'opacity-100'
                      )}
                    >
                      <ArrowLeft className="h-6 w-6 text-white" />
                    </div>

                    <div
                      onClick={scrollNext}
                      className={cn(
                        'absolute inset-y-0 end-4 z-50 my-auto grid h-12 w-12 cursor-pointer place-items-center rounded bg-secondary/50 opacity-0 transition-all ',

                        'opacity-100'
                      )}
                    >
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </>
                )}
                {expanable && (
                  <div
                    onClick={() => setIsExpanded(false)}
                    className="absolute end-4 top-2 z-40 grid h-12 w-12 cursor-pointer place-items-center rounded bg-secondary/50 transition-all opacity-100"
                  >
                    <Minimize2 className="h-6 w-6 text-white" />
                  </div>
                )}

                <CarouselContent className="relative min-h-[75dvh] flex items-center ">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="relative  h-full items-center"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1500}
                        height={1000}
                        className="my-auto aspect-video h-full w-full object-contain"
                        priority
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
            </Carousel>

            {/* thumbnails */}
            <ThumbnailCarousel
              itemClassName="lg:basis-1/8 xl:basis-1/12 basis-1/4 md:basis-1/6"
              contentClassName={cn({
                'lg:justify-center': images.length < 8,
                'xl:justify-center': images.length < 12,
              })}
              current={current}
              setApi={setThumbnailApi}
              images={images}
              onThumbClick={onThumbClick}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className={cn('select-none space-y-4', className)}>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ startIndex: current, loop: true }}
      >
        <div className="group relative">
          {overplay && (
            <>
              <div
                onClick={scrollPrev}
                className={cn(
                  'absolute inset-y-0 -start-4 z-50 my-auto grid h-12 w-12 cursor-pointer place-items-center rounded bg-secondary/50 opacity-0 transition-all will-change-transform group-hover:translate-x-8',

                  'group-hover:opacity-100'
                )}
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </div>

              <div
                onClick={scrollNext}
                className={cn(
                  'absolute inset-y-0 -end-4 z-50 my-auto grid h-12 w-12 cursor-pointer place-items-center rounded bg-secondary/50 opacity-0 transition-all group-hover:-translate-x-8',

                  'group-hover:opacity-100'
                )}
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </>
          )}

          {hasLike && (
            <div className="absolute end-6 top-4 z-50 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-secondary/50">
              <Heart
                className={cn('h-5 w-5 text-white', {
                  'fill-white': like,
                })}
                onClick={() => setLike((prev) => !prev)}
              />
            </div>
          )}

          {socials ? (
            <div className="group/secend absolute end-20 top-4 z-50 flex flex-col items-center gap-1">
              <div className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-secondary/50">
                <Share2 className="h-5 w-5 text-white" />
              </div>

              {socials.facebookLink && (
                <Link
                  aria-label="hotel facebook"
                  href={socials.facebookLink}
                  target="_blank"
                  className="pointer-events-none z-40 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white opacity-0 transition-opacity group-hover/secend:pointer-events-auto group-hover/secend:opacity-100"
                >
                  <Facebook className="h-5 w-5 text-secondary" />
                </Link>
              )}

              {socials.twitterLink && (
                <Link
                  aria-label="hotel tweeter"
                  href={socials.twitterLink}
                  target="_blank"
                  className="z-4100 pointer-events-none grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white opacity-0 transition-opacity group-hover/secend:pointer-events-auto group-hover/secend:opacity-100"
                >
                  <Twitter className="h-5 w-5 text-secondary" />
                </Link>
              )}
            </div>
          ) : null}

          {expanable && (
            <div
              onClick={() => setIsExpanded(true)}
              className="absolute -end-4 bottom-8 z-40 grid h-12 w-12 cursor-pointer place-items-center rounded bg-secondary/50 opacity-0 transition-all group-hover:-translate-x-8 group-hover:translate-y-4 group-hover:opacity-100"
            >
              <Maximize2 className="h-6 w-6 text-white" />
            </div>
          )}

          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={500}
                  priority
                  className="h-52 w-full object-cover md:h-80 lg:h-96"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>

      {/* thumbnails */}
      <ThumbnailCarousel
        current={current}
        setApi={setThumbnailApi}
        images={images}
        onThumbClick={onThumbClick}
        contentClassName={images.length < 5 ? 'lg:justify-center' : ''}
        {...thumbnailProps}
      />
    </div>
  );
};

export default ImageCarousel;
