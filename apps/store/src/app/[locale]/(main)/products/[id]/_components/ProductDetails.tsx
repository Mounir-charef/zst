import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  buttonVariants,
} from '@mono/ui';
import { Variant } from '../../types';
import { MessageCircle } from 'lucide-react';
import { Link } from '../../../../../../navigation';

interface ProductDetailsProps {
  name: string;
  description: string;
  categories: string[];
  variants: Variant[];
}

const ProductDetails = ({
  categories,
  description,
  variants,
  name,
}: ProductDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="space-y-2">
          <span>{name}</span>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Badge variant="outline">{category}</Badge>
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h5 className="text-lg font-semibold">Description</h5>
          <CardDescription>{description}</CardDescription>
        </div>
        <Separator />
        <div>
          <h5 className="text-lg font-semibold">Variants</h5>
          <p className="mt-2 text-sm">
            Total options:{' '}
            <span className="font-semibold">
              {variants
                .map(({ name, values }) => `${values.length} ${name}`)
                .join(', ')}
            </span>
          </p>
          <div className="mt-4 space-y-6">
            {variants.map(({ name, values }) => (
              <div key={name} className="space-y-2">
                <h6 className="text-base font-semibold">
                  {name} ({values.length}):
                </h6>
                <div className="flex flex-wrap gap-4">
                  {values.map((value) => (
                    <Badge variant="secondary">{value}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator />
      </CardContent>
      <CardFooter className="block space-y-6">
        <div className="flex flex-grow justify-end gap-4">
          <Button size="lg" className="flex-1">
            Create Auction request
          </Button>
          <Button size="lg" className="flex-1" variant="outline">
            Create Auction request
          </Button>
          <Button size="icon" className="h-11 w-11" variant="outline">
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-muted-foreground text-sm">
          <span>Still deciding? Get samples first!</span>
          <Link href="#" className="text-foreground ms-2 font-medium">
            Order sample
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductDetails;
