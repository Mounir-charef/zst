import { memo } from 'react';
import { auth } from '../../../../lib/auth/auth';
import { Link, redirect } from '../../../../navigation';
import ImageCarousel from '../_components/ImageCarousel';
import SignUpForm from '../_components/SignUpForm';

const page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect('/');
  }
  return (
    <div className="max-lg:dark max-lg:bg-background max-lg:text-foreground grid h-full w-full max-lg:place-items-center lg:grid-cols-2">
      <div className="bg-background text-foreground dark flex items-center justify-center px-2 py-12">
        <div className="mx-auto grid gap-6 lg:w-[500px]">
          <div className="grid gap-6 text-center">
            <h1 className="text-3xl font-bold md:text-4xl">Sign Up</h1>
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
