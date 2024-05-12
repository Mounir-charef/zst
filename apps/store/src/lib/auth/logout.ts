import { signOut } from 'next-auth/react';
import { env } from '../../env.mjs';

export async function logout() {
  fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(async () => {
      await signOut({ callbackUrl: `${window.location.origin}/login` });
    });
}
