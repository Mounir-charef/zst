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
      <Card className="mx-auto w-80 sm:w-96">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription className="text-muted-foreground italic">
            Sign in to dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <SignInForm />

          {/* <div className="text-heading relative flex flex-col items-center justify-center text-sm">
            <hr className="w-full" />
            <span className="bg-background text-muted-foreground absolute px-2">
              Or
            </span>
          </div>

          <div className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default memo(page);
