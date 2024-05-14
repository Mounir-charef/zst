import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface DefaultUser {
    id: string;
  }
  interface User {
    username: string;
    email: string;
    avatar: string;
    role: 'SUPPLIER';
    accessToken: string;
    refreshToken: string;
  }

  interface SessionUser {
    id: string;
    username: string;
    email: string;
    avatar: string;
    accessToken: string;
    role: 'SUPPLIER';
  }

  interface Session {
    user: SessionUser;
    error?: string;
  }
}
declare module 'next-auth/jwt' {
  interface DefaultJWT {
    id: string;
  }

  interface JWT {
    id: string;
    username: string;
    email: string;
    avatar: string;
    expires_at: number;
    accessToken: string;
    refreshToken?: string;
  }
}
