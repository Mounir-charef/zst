import { jwtDecode } from '@mono/util';
import { NextAuthOptions, User, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            ...credentials,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = (await res.json()) as User;

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const data = { ...token };

      if (user && user.token) {
        // If login with Credentials
        // - user object is what the credential provider returns (from the authorize function)
        // - for instance, you return `accessToken` in the authorize function => bind accessToken to the data
        // and make it available to the client.
        data.id = user.id;
        data.email = user.email;
        data.username = user.username;
        data.image = user.image;
        data.accessToken = user.token;
        data.refreshToken = user.token;

        // exp date
        data.expires_at =
          Date.now() + (jwtDecode(user.token as string).exp as number);

        return data;
      } else if (Date.now() < token.expires_at) {
        // If the access token has not expired yet, return it
        return token;
      } else {
        // If the access token has expired, try to refresh it
        try {
          // https://accounts.google.com/.well-known/openid-configuration
          // We need the `token_endpoint`.
          const response = await fetch('https://dummyjson.com/auth/refresh', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token.refreshToken}`,
            },
          });

          const newToken: User = await response.json();

          if (!response.ok) throw newToken;
          return {
            ...token, // Keep the previous token properties
            accessToken: newToken.token,
            refreshToken: newToken.token,
            expires_at:
              Date.now() +
              (jwtDecode(token.accessToken as string).exp as number),
          };
        } catch (error) {
          return { ...token, error: 'RefreshAccessTokenError' as const };
        }
      }
    },

    async session({ session, token }) {
      return {
        user: {
          id: token.id,
          username: token.username,
          email: token.email,
          image: token.image,
          accessToken: token.accessToken,
        },
        expires: session.expires,
      } as const;
    },
  },
} satisfies NextAuthOptions;

export const getAuthSession = () => getServerSession(authOptions);
