import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { memo } from 'react';
import SignInForm from '../_components/SignInForm';

const page = () => {
  return (
    <div className="bg-accent grid h-full place-items-center">
      <Card className="mx-auto w-80 shadow sm:w-96">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription className="text-muted-foreground italic">
            Sign in to dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(page);
