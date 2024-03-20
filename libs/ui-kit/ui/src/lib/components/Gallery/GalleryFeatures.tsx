import { LucideIcon } from 'lucide-react';

interface GalleryFeaturesProps {
  features: {
    name: string;
    label: string;
    Icon: LucideIcon;
  }[];
}

const GalleryFeatures = ({ features }: GalleryFeaturesProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 border-y py-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <div key={feature.name} className="flex items-center gap-4">
          <feature.Icon size={34} strokeWidth={1.5} />
          <div className="flex flex-col justify-between text-sm capitalize">
            <p className="font-medium">{feature.name}</p>
            <p className="text-muted-foreground">{feature.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryFeatures;
