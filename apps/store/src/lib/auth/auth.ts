import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { toast } from 'sonner';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
});

export async function logout() {
  try {
    await signOut({ redirectTo: '/sign-in' });
  } catch (error) {
    toast.error('Something went wrong. Please try again.');
  }
}
