import { LucideIcon } from 'lucide-react';
import GalleryHeader, { GalleryHeaderProps } from './GalleryHeader';
import GalleryFeatures from './GalleryFeatures';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

export interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  socials?: {
    facebookLink?: string;
    twitterLink?: string;
  };
  headerProps: GalleryHeaderProps;
  features?: {
    name: string;
    label: string;
    Icon: LucideIcon;
  }[];
}

export const Gallery = ({
  images,
  socials,
  headerProps,
  features,
}: GalleryProps) => {
  return (
    <div className="space-y-4 pb-8" dir="ltr">
      <GalleryHeader {...headerProps} />
      {features && <GalleryFeatures features={features} />}
      <ImageCarousel images={images} hasLike socials={socials} expanable />
    </div>
  );
};
