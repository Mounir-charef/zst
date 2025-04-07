import { signOut } from '../lib/auth/auth';

const LogoutButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default LogoutButton;
