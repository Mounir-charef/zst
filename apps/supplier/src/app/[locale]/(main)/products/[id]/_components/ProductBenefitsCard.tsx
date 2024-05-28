import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@mono/ui';
import { RocketIcon } from 'lucide-react';
import { memo } from 'react';

const ProductBenefitsCard = () => {
  return (
    <Card>
      <CardHeader>
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Membership benefits</AlertTitle>
          <AlertDescription>
            Claim US $80 in coupons every monthView more.
          </AlertDescription>
        </Alert>
      </CardHeader>
      <CardContent>
        <h4 className="text-base font-medium">Protections for this product</h4>
        <div className="mt-4 grid gap-4">
          <div className="space-y-1 text-sm">
            <h5 className="font-medium">Secure payments</h5>
            <p className="text-muted-foreground">
              Every payment you make on Alibaba.com is secured with strict SSL
              encryption and PCI DSS data protection protocols
            </p>
          </div>
          <div className="space-y-1 text-sm">
            <h5 className="font-medium">Refund policy</h5>
            <p className="text-muted-foreground">
              Claim a refund if your order doesn't ship, is missing, or arrives
              with product issues
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-sm font-medium">
        ZST.ecom protects all your orders placed and paid on the platform .
      </CardFooter>
    </Card>
  );
};

export default memo(ProductBenefitsCard);
