import Image from 'next/image';
import { memo } from 'react';
import { Link, redirect } from '../../../../navigation';
import SignInForm from '../_components/SignInForm';
import { auth } from '../../../../lib/auth/auth';

const page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect('/');
  }
  return (
    <div className="bg-background text-foreground dark grid h-full w-full max-lg:place-items-center lg:grid-cols-2">
      <div className="bg-background text-foreground flex items-center justify-center px-2 py-12">
        <div className="mx-auto grid gap-6">
          <div className="grid gap-6 text-center">
            <h1 className="text-3xl font-bold md:text-4xl">Log In</h1>
            <p className="text-pretty">
              We only support Google sign-in for now. Please use your Google
              account to log in.
            </p>
          </div>
          <SignInForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-muted hidden min-h-screen lg:block">
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
