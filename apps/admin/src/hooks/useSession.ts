'use client';

import { signOut, useSession as useAuthSession } from 'next-auth/react';
import { useEffect } from 'react';

const useSession = () => {
  const session = useAuthSession();
  useEffect(() => {
    if (session.data?.error === 'RefreshAccessTokenError') {
      signOut(); // Force sign out for the user
    }
  }, [session]);

  return session;
};

export default useSession;
