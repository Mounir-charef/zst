import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface DefaultUser {
    id: string;
  }
  interface User {
    username: string;
    email: string;
    image: string;
    token: string;
  }

  interface SessionUser {
    id: string;
    username: string;
    email: string;
    image: string;
    accessToken: string;
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
    image: string;
    expires_at: number;
    accessToken: string;
    refreshToken: string;
  }
}
