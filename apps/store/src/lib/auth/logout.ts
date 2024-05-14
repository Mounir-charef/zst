'use server';

import { signOut } from 'next-auth/react';
import { cookies } from 'next/headers';
import { redirect } from '../../navigation';

export async function logout() {
  cookies().delete('xxx-refresh-token');
  await signOut({ callbackUrl: `${window.location.origin}/login` });
  redirect('/sign-in');
}
