import Image from 'next/image';
import { memo } from 'react';
import { Link } from '../../../../navigation';
import SignUpForm from '../_components/SignUpForm';
import ImageCarousel from '../_components/ImageCarousel';

const page = () => {
  return (
    <div className="grid h-full w-full max-lg:place-items-center lg:grid-cols-2">
      <div className="bg-background text-foreground dark flex items-center justify-center py-12">
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
      <div className="light bg-muted border-border text-foreground hidden lg:grid lg:place-items-center">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default memo(page);
