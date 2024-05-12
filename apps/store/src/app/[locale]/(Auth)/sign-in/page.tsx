import Image from 'next/image';
import { memo } from 'react';
import { Link } from '../../../../navigation';
import SignInForm from '../_components/SignInForm';

const page = () => {
  return (
    <div className="grid h-full w-full max-lg:place-items-center lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Log In</h1>
            <p className="text-pretty">
              Enter your email below to login to your account
            </p>
          </div>
          <SignInForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-muted hidden lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default memo(page);
