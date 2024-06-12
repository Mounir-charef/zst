'use client';

import axios from 'axios';
import { useSession as useAuthSession } from 'next-auth/react';
import { useEffect } from 'react';
import { logout } from '../lib/auth/logout';
import { env } from '../env.mjs';

let axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useSession = () => {
  const session = useAuthSession();

  useEffect(() => {
    if (session.data?.error) {
      axiosInstance.defaults.headers.common['Authorization'] = undefined;
      logout();
    }
    if (session.status === 'authenticated') {
      axiosInstance.defaults.headers.common['Authorization'] =
        `Bearer ${session.data.user.accessToken}`;
    } else {
      axiosInstance.defaults.headers.common['Authorization'] = undefined;
    }
  }, [session, session.data?.error, session.status]);

  return { ...session.data, axiosInstance };
};

export default useSession;
