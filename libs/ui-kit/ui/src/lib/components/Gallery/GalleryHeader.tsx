import { MapPin, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
export interface GalleryHeaderProps {
  rating: number;
  name: string;
  location: string;
  totalReviews: number;
  showRating?: boolean;
}

const GalleryHeader = ({
  location,
  name,
  rating,
  totalReviews,
  showRating,
}: GalleryHeaderProps) => {
  const t = useTranslations('services.details.reviews');
  return (
    <div className="flex justify-between">
      {/* left side */}
      <div className="flex flex-col justify-between">
        {showRating && (
          <div className="space-x-1">
            {/* 5 starts icons */}
            {[...Array(Math.round(rating))].map((_, i) => (
              <Star
                key={i}
                className="inline-block"
                fill="#fa5636"
                strokeWidth={0}
                size={18}
              />
            ))}
          </div>
        )}
        <h1 className="text-lg font-medium md:text-3xl">{name}</h1>
        <h2 className="space-x-1">
          <MapPin className="inline-block" /> {location}
        </h2>
      </div>
    </div>
  );
};

export default GalleryHeader;
