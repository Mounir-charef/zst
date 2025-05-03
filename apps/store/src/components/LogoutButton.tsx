import { signOut } from '../lib/auth/auth';
import { logout } from '../actions/logout';
const LogoutButton = () => {
  return (
    <form action={logout}>
      <button type="submit">Sign Out</button>
    </form>
  );
};

export default LogoutButton;
