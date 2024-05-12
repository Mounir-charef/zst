import Image from 'next/image';
import { memo } from 'react';
import { Link } from '../../../../navigation';
import SignUpForm from '../_components/SignUpForm';

const page = () => {
  return (
    <div className="grid h-full w-full max-lg:place-items-center lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid gap-6 lg:w-[500px]">
          <div className="grid gap-6 text-center">
            <h1 className="text-3xl font-bold md:text-4xl">Sign Up</h1>
            <p className="text-pretty">
              Enter your email below to login to your account
            </p>
          </div>
          <SignUpForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="sign-in" className="underline">
              Log in
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
