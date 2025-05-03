import { Button } from '@mono/ui';
import GoogleIcon from '../../../../assets/icons/GoogleIcon';
import { signIn } from '../../../../lib/auth/auth';

const SignUpForm = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', {
          redirectTo: '/',
        });
      }}
      className="flex w-full justify-center"
    >
      <Button variant="outline" type="submit" className="space-x-2">
        <GoogleIcon className="me-2" /> Sign-up with Google
      </Button>
    </form>
  );
};

export default SignUpForm;
