import { NextAuthOptions, Session, User, getServerSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cookies, headers } from 'next/headers';
import { env } from '../../env.mjs';
import { cache } from 'react';
import { jwtDecode } from '@mono/util';

async function refreshAccessToken(token: JWT) {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`, {
      method: 'POST',
      headers: headers(),
    });

    const { success, data } = await res.json();
    if (!success) {
      console.log('The token could not be refreshed!');
      throw data;
    }

    console.log('The token has been refreshed successfully.');

    // get some data from the new access token such as exp (expiration time)
    const decodedAccessToken = jwtDecode(data.accessToken);
    return {
      ...token,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken ?? token.refreshToken,
      expires_at: decodedAccessToken['exp'] * 1000,
    };
  } catch (error: any) {
    // return an error if somethings goes wrong

    return {
      ...token,
      error: 'RefreshAccessTokenError', // attention!
    };
  }
}

export const authOptions = {
  debug: env.NODE_ENV === 'development',

  pages: {
    signIn: '/sign-in',
  },

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24, // one day
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(env.NEXT_PUBLIC_BACKEND_API + '/auth/signin', {
          method: 'POST',
          body: JSON.stringify({
            ...credentials,
            role: 'SUPPLIER',
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        const user = (await res.json()) as User;

        // check if response is ok
        if (!res.ok) {
          //@ts-ignore
          throw new Error(user.message);
        }

        if (res.ok && user) {
          cookies().set({
            name: 'xxx.refresh-token',
            value: user.refreshToken,
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
          });

          return user;
        }

        return null;
      },
    }),
  ],

  secret: env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user, account }) {
      if (user && account) {
        // If login with Credentials
        // - for instance, you return `accessToken` in the authorize function => bind accessToken to the data
        // and make it available to the client.
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;

        // exp date
        const userData = jwtDecode(user.accessToken);

        token.email = userData.email;
        token.id = userData.id;
        token.role = userData.role;
        token.username = userData.username;
        token.avatar = 'https://robohash.org/Jeanne.png?set=set4';
        token.expires_at = userData.exp * 1000;
        return token;
      }

      if (Date.now() < token.expires_at) {
        // if our access token has not expired yet, return all information except the refresh token
        const { refreshToken, ...rest } = token;
        return rest;
      }

      return await refreshAccessToken(token);
    },

    async session({ token }) {
      const newSession: Session = {
        user: {
          id: token.id,
          email: token.email,
          accessToken: token.accessToken,
          avatar: token.avatar,
          username: token.username,
          role: token.role as 'SUPPLIER',
        },
        error: token.error as string,
        expires: new Date(token.expires_at).toISOString(),
      };
      return newSession;
    },
  },
} satisfies NextAuthOptions;

export const getAuthSession = cache(() => getServerSession(authOptions));
