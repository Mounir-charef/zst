import { Button } from '@mono/ui';
import GoogleIcon from '../../../../assets/icons/GoogleIcon';
import { signIn } from '../../../../lib/auth/auth';

const LoginForm = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
      className="flex w-full justify-center"
    >
      <Button variant="outline" type="submit">
        <GoogleIcon className="me-2" /> Sign-in with Google
      </Button>
    </form>
  );
};

export default LoginForm;
