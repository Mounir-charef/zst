import { signOut } from 'next-auth/react';
import { toast } from 'sonner';

export async function logout() {
  try {
    await signOut({ callbackUrl: '/sign-in' });
  } catch (error) {
    toast.error('Something went wrong. Please try again.');
  }
}
