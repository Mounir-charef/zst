import { signOut } from 'next-auth/react';
import { toast } from 'sonner';
import { env } from '../../env.mjs';

export async function logout() {
  try {
    await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {
      method: 'POST',
    });
    await signOut({
      redirect: false,
    });
  } catch (error) {
    toast.error('Something went wrong. Please try again.');
  }
}
