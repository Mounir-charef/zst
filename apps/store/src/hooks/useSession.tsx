'use client';

import { useSession as useAuthSession } from 'next-auth/react';
import { useEffect } from 'react';
import { logout } from '../lib/auth/logout';

const useSession = () => {
  const session = useAuthSession();
  useEffect(() => {
    if (session.data?.error === 'RefreshAccessTokenError') {
      logout(); // Force sign out for the user
    }
  }, [session]);

  return session;
};

export default useSession;
